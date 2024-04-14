import { computed } from "vue";
import { jwtDecode, JwtPayload } from "jwt-decode";

type JWTtoken = {
    sub: number,
    id_role: number
} & JwtPayload

export function useJWT(){
    const jwtToken = computed(()=> localStorage.getItem('accessToken'))
    const decodedToken = computed(()=> {
        if (jwtToken.value !== null) {
            return jwtDecode<JWTtoken>(jwtToken.value)
        }else{
            return undefined
        }
    })
    return {
        jwtToken,
        decodedToken
    }
}