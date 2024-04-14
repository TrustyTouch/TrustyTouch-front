export default class {
    public register(nom: string, email: string, mot_de_passe: string,id_roles: number,code_parainage: number) : Promise<any>
    {
        return fetch("http://localhost:5000/create_user", {
            method:"POST",
            body: JSON.stringify({
                nom,
                email,
                mot_de_passe,
                id_roles,
                code_parainage
            }), 
            headers:{
                'Content-type': 'application/json'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible d'enregistrer l'utilisateur")
            }
            return await res.json()
        })
    }

    public login(email: string,mot_de_passe: string) : Promise<any>
    {
        return fetch("http://localhost:5000/login", {
            method:"POST",
            body: JSON.stringify({
                email,
                mot_de_passe
            }), 
            headers:{
                'Content-type': 'application/json'
            }
        }).then(async (res) => {
            if (!res.ok) {
                throw new Error("Impossible de se connecter")
            }
            const response = await res.json()
            localStorage.setItem('accessToken',response.access_token)
        })
    }
}

