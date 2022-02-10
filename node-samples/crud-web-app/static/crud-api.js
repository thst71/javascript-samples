export default class CrudAPI {
    #baseUrl
    #basePath

    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
        this.#basePath = new URL(baseUrl).pathname
    }

    #createUrl() {
        return new URL(this.#basePath, this.#baseUrl).toString();
    }

    async create(data) {
        let res = await fetch(this.#createUrl(),
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        if (!res.ok) throw "Datensatz nicht angelegt";
        return await res.json();
    }

    #updateURL(id) {
        return new URL(`${this.#basePath}/${id}`, this.#baseUrl).toString();
    }

    async update(id, data) {
        let res = await fetch(this.#updateURL(id),
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        if (!res.ok) throw "Datensatz nicht aktualisiert";
        return "OK";
    }

    #deleteURL(id) {
        return new URL(`${this.#basePath}/${id}`, this.#baseUrl).toString();
    }

    async delete(id) {
        let res = await fetch(this.#deleteURL(id),
            {
                method: "DELETE"
            });
        if (!res.ok) throw "Datensatz nicht gelöscht";
        return "OK";
    }

    #listUrl() {
        return new URL(`${this.#basePath}/list`, this.#baseUrl).toString();
    }

    async list() {
        let res = await fetch(this.#listUrl());
        if (!res.ok) throw "Liste nicht verfügbar";
        return await res.json();
    }

    #getUrl(id) {
        return new URL(`${this.#basePath}/${id}`, this.#baseUrl).toString();
    }

    async get(id) {
        let res = await fetch(this.#getUrl(id));
        if (!res.ok) throw "Datensatz nicht verfügbar: " + id;
        return await res.json();
    }
}