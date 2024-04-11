export default class {
    public register(nom: string,mot_de_passe: string,id_roles: number,code_parainage: number) : Promise<any>
    {
        return fetch("http://localhost:5000/create_user", {
            method:"POST",
            body: JSON.stringify({
                nom,
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
}