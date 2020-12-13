import Axios from "axios"
import {
    api_url
} from "../../Helper/API"

//MASUKIN DATA JADI PAKE (data)
export const pekerjaanAction = (data) => {
    return (dispatch) => {
        Axios.post(`${api_url}/users`, data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//NGAMBIL DOANG JADI KOSONG () DOANG
export const fetchData = () => {
    return (dispatch) => {
        Axios.get(`${api_url}/users`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//NAMPILIN DATA YG DIAMBIL DARI DATABASE
