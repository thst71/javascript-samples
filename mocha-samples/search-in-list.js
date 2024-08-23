export default function searchAndHighlight(e) {
    let text = document.querySelector("#searchfield").value;
    let list = document.querySelectorAll("li");
    list.forEach(li => li.className = (text && li.textContent.includes(text)) ? "treffer" : "");
}

// attach to the browser
document.querySelector("#search").onsubmit = (e) => e.preventDefault();
document.querySelector("#searchfield").addEventListener("input", searchAndHighlight);