type User = {
    id: number;
    nom: string;
    id_roles: number;
    code_parainage: number;
    biographie: string;
}

export default class {
    async createUser(nom: string, mot_de_passe: string, id_roles: number, code_parainage: number): Promise<any> {
        const res = await fetch("http://localhost:5000/create_user", {
            method: "POST",
            body: JSON.stringify({
                nom,
                mot_de_passe,
                id_roles,
                code_parainage
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        
        if (!res.ok) {
            throw new Error("Impossible de créer le user")
        }
        return await res.json()
    }

    async getNbUser(): Promise<any> {
        const res = await fetch("http://localhost:5000/get_nb_user", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        if (!res.ok) {
            throw new Error("Impossible de compter les utilisateurs")
        }
        return await res.json()
    }

    async getNbPresta(): Promise<any> {
        const res = await fetch("http://localhost:5000/get_nb_presta", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        if (!res.ok) {
            throw new Error("Impossible de compter les prestataires")
        }
        return await res.json()
    }

    async getUsers(id_categorie: number): Promise<User[]> {
        const res = await fetch("http://localhost:5000/get_users/" + id_categorie, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        if (!res.ok) {
            throw new Error("Impossible de trouver des users")
        }
        return await res.json()
    }

    async getUser(id_user: number): Promise<User> {
        const res = await fetch("http://localhost:5000/get_user/" + id_user, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            }
        })
        if (!res.ok) {
            throw new Error("Impossible de trouver le user voulu")
        }
        return await res.json()
    }

    async updateUser(id_user: number, nom: string, biographie: string) {
        const res = await fetch(`http://localhost:5000/update_user/${id_user}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + (localStorage.getItem("accessToken") || ""),
                'creditential': 'include'
            },
            body: JSON.stringify({ nom, biographie })
        })
        return res.ok
    }

    async deleteUser(id_user: number) {
        const res = await fetch(`http://localhost:5000/delete_user/${id_user}`, {
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
