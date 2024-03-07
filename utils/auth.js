import axios from "axios"

export const setJwtToken = (jwt) => {
    return sessionStorage.setItem("jwt" , jwt)
}

export const getJwtToken = () => {
    return sessionStorage.getItem("jwt")
}

export const setRefreshToken = (token) => {
    return sessionStorage.setItem("refreshToken" , token)
}

export const getRefreshToken = () => {
    return sessionStorage.getItem("refreshToken")
}

export const login = async(endPoint ,formData) => {
    const response = await axios.post(`${endPoint}` , {email,password})
    .then((res) => {
        return res.data
    })
}