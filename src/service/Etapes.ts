export default class {
    async createEtape(id_service: number, id_demandeur: number, statut: number): Promise<any> {
        const res = await fetch("http://localhost:5000/create_etape", {
            method: "POST",
            body: JSON.stringify({
                id_service,
                id_demandeur,
                statut
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        
        if (!res.ok) {
            throw new Error("Impossible de choisir le service")
        }
        return await res.json()
    }
    public getEtape(id_demandeur: number): Promise<any> {
        return fetch("http://localhost:5000/get_etape/" + id_demandeur, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de trouver des etapes")
            }
            return await res.json()
        })
    }
    public updateEtape(idDemandeur: number, etape: number, idEtape: number): Promise<any> {
        return fetch("http://localhost:5000/update_etape/" + idEtape, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            },
            body: JSON.stringify({
                "statut": etape,
                "id_demandeur": idDemandeur
            })
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de trouver des etapes")
            }
            return await res.json()
        })
    }
    public deleteEtape(idEtape: number): Promise<any> {
        return fetch("http://localhost:5000/delete_etape/" + idEtape, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            },
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de supprimer l'etape")
            }
            return await res.json()
        })
    }
}