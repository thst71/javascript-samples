"use strict"
import CrudAPI from './crud-api.js';

const FORM_ID = "#crud-form";
const APP_OUT = "#crud-out";
const api = new CrudAPI(new URL("/api", document.URL).toString());
const appForm = document.querySelector(FORM_ID);
const outArea = document.querySelector(APP_OUT);

/**
 * Die Liste der Formularfeld Namen / IDs
 * @type {string[]}
 */
const fields = ["vorname", "nachname", "adresse1", "adresse2", "plz", "stadt"];

/**
 * Rendert die Liste der Datensätze als UL.
 * - Das LI hat das Command "SHOW"
 * - Der Edit Button hat das Command "EDIT"
 * - Der Delete Button hat das Command "DELETE"
 *
 * Die Commands werden durch den Ausgabe-Click Handler verarbeitet
 * @param dataset
 */
function displayList(dataset) {
    outArea.innerHTML = "<ul>";
    dataset.forEach((address, idx) => {
        if(address) {
            outArea.insertAdjacentHTML("beforeend", `\
<li data-id="${idx}" data-cmd="show">${idx}: ${address?.vorname ?? ""}
 ${address?.nachname ?? ""},
 ${address?.adresse1 ?? ""},  
 ${address?.adresse2 ?? ""},  
 ${address?.plz ?? ""},  
 ${address?.stadt ?? ""} 
  <button data-id="${idx}" data-cmd="edit">edit</button> 
  <button data-id="${idx}" data-cmd="delete">delete</button></li>\
`)
        }
    });
    outArea.insertAdjacentHTML("beforeend", "</ul>");
}

/**
 * Generischer Handler, der nach Erfolgreicher Transaktion aufgerufen wird.
 * Ruft die Formularliste vom Backend ab und stellt sie dar.
 * @param countObj
 */
function onStateChangeSuccess(countObj) {
    api.list().then(displayList);
    // todo insert amount of datasets somewhere
}

/**
 * Generische Error-Anzeige
 * @param err der Fehler-String
 */
function displayError(err) {
    alert(err);
}

/**
 * Utility Funktion, kopiert Daten aus dem Objekt in das Formular.
 * @param dataObject Quelldatenobjekt
 */
function objectToForm(dataObject) {
    fields.forEach(fName => {
        let ff = this.querySelector("#" + fName);
        if (ff) ff.value = dataObject[fName];
    });
}

/**
 * Utility Funktion, kopiert das Formular in das Datenobjekt
 * @param dataObject Objekt für die Daten, wird ergänzt/überschrieben
 */
function formToObject(dataObject) {
    fields.forEach(fName => dataObject[fName] = document.querySelector("#" + fName)?.value);
}

/**
 * Utility Funktion, um das Formular zu löschen
 */
function clearForm() {
    fields.forEach(fName => {
        let ff = document.querySelector("#" + fName);
        if (ff) ff.value = "";
    });
}

/**
 * Utility Funktion, um das Formular in den Edit Modus zu versetzen
 * @param id
 */
function formModeUpdate(id) {
    appForm.setAttribute("data-id", id);
    appForm.setAttribute("data-cmd", "update");
}

/**
 * Utility Funktion um das Formular in den Create modus zu versetzen
 */
function formModeCreate() {
    // clear form attributes
    appForm.removeAttribute("id");
    appForm.removeAttribute("cmd");

}

/**
 * Generischer onsubmit Handler für das Formular. Identifiziert, ob das Formular als Update oder als Create View benutzt
 * wird und ruft dementsprechend UPDATE oder CREATE auf.
 *
 * @param e Event
 */
function onSubmitEntryForm(e) {
    e.preventDefault();
    // save form to api
    let dataObject = {};
    formToObject(dataObject);

    if (appForm.dataset?.id) {
        if (appForm.dataset?.cmd === "update") {
            api.update(appForm.dataset?.id, dataObject)
                .then(onStateChangeSuccess)
                .catch(displayError)

        }
    } else {
        api.create(dataObject)
            .then(onStateChangeSuccess)
            .catch(displayError)
    }
    formModeCreate();
    clearForm();
}

/**
 * Lädt ein Formular aus dem Backend, überträgt die Daten in den Editor und schaltet den Editor auf UPDATE
 * @param id Datensatz Id
 * @returns {Promise<void>} unused
 */
async function editDataset(id) {
    try {
        let dataset = await api.get(id);
        objectToForm(dataset);
        formModeUpdate(id);
    } catch (e) {
        displayError(e);
    }

}

/**
 * Rendert eine (sehr krude) Sicht auf einen Datensatz
 * @param dataSet Die Daten
 */
function diplayDetails(dataSet) {
    alert(Object.entries(dataSet).map( kv => kv.join(": ")).join("\n"));
}

/**
 * liest einen Datensatz aus der API und zeigt ihn an
 * @param id Datensatz ID
 */
function showDataset(id) {
    api.get(id)
        .then(diplayDetails);
}

/**
 * löscht den Datensatz mit id
 * @param id zu löschender Datensatz
 */
function deleteDataset(id) {
    api.delete(id)
        .then(onStateChangeSuccess)
        .catch(displayError);
}

/**
 * Bearbeitet alle Clicks in der Ausgabeliste.
 * Wertet data-cmd aus, um festzustellen, welche Aktion mit dem Datensatz erfolgen soll. Der betroffene Datensatz
 * steht in data-id.
 * @param e click Event
 */
function onSelectOutput(e) {
    const id = e.target.dataset?.id;
    const cmd = e.target.dataset?.cmd;
    e.stopImmediatePropagation();
    if (id && cmd) {
        switch (cmd) {
            case "edit":
                editDataset(id).catch(displayError);
                break;
            case "show":
                showDataset(id);
                break;
            case "delete":
                deleteDataset(id);
                break;
        }
    }
}

function initCrudApp() {
    document.querySelector(FORM_ID)
        .addEventListener("submit", onSubmitEntryForm);
    document.querySelector(APP_OUT)
        .addEventListener("click", onSelectOutput);
    onStateChangeSuccess();
}

window.addEventListener("load", initCrudApp);