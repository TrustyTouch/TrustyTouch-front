export default class {
    public createService(titre: string, description: string, id_createur: number, id_categorie: number, prix: number): Promise<any> {
        return fetch("http://localhost:5000/create_service", {
            method: "POST",
            body: JSON.stringify({
                titre,
                description,
                id_createur,
                id_categorie,
                prix
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de créer le service")
            }
            return await res.json()
        })
    }

    public getNbServices(): Promise<any> {
        return fetch("http://localhost:5000/get_nb_services", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de compter les services")
            }
            return await res.json()
        })
    }

    public getServices(id_categorie: number): Promise<any> {
        return fetch("http://localhost:5000/get_services/" + id_categorie, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de trouver des services")
            }
            return await res.json()
        })
    }

    public getService(id_service: number): Promise<any> {
        return fetch("http://localhost:5000/get_service/" + id_service, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de trouver le service voulu")
            }
            return await res.json()
        })
    }

    public getMyServices(): Promise<any> {
        return fetch("http://localhost:5000/get_my_services", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de trouver des services")
            }
            return await res.json()
        })
    }

    public async updateService(id_service: number, titre: string, description: string, id_categorie: number, prix: number) {
        const res = await fetch(`http://localhost:5000/update_service/${id_service}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            },
            body: JSON.stringify({
                titre,
                description,
                id_categorie,
                prix
            })
        })
        return res.ok
    }

    public async deleteService(id_service: number) {
        const res = await fetch(`http://localhost:5000/delete_service/${id_service}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        return res.ok
    }
}
