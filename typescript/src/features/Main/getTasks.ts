import axios from 'axios';

const fetchTasks = async () => {
    try {
        let response = await axios.get("https://f29868e6-93c9-4ee9-9f5e-4a81ae50d2c4.mock.pstmn.io/tasks?offset=10");
        return response.data; // Return only the data property of the response
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching tasks. Please try again later."); // Throw an error for catch block in useEffect
    }
};

export default fetchTasks