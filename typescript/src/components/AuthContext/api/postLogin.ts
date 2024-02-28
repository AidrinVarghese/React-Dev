import axios from "axios"

const postLogin = async({email,password}, setMail) => {
    setMail(email)
      return axios.post("https://e6056742-cf91-4d62-9ebf-a881bb589a90.mock.pstmn.io/login",{email,password})

}

export default postLogin