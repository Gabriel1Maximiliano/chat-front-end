import axios from 'axios';

export const baseURL = import.meta.env.VITE_REACT_APP_URL_API;



const socketApi = axios.create({
    baseURL,
    // headers: {
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDFlMjI3YzNlNmI3OWU3YmZhZjg3NTQiLCJpYXQiOjE2Nzk2OTY1MjQsImV4cCI6MTY3OTc4MjkyNH0.-eFNSmifJebh-rsswH7x_2v_XHj08GfsH8vytJjEOmc'
    //   }

})

export default socketApi;