import axios from "axios"


export const fetchTasks = async(offset) =>{
    return await axios.get(
      `https://d60e33ed-236f-40ea-b67d-ae6003a9496b.mock.pstmn.io/tasks?offset=${offset}`)
      .then((res) => (res.data))
      // .then(res => res.data)
      .catch((err) => err)
  }
