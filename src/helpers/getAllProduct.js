import axios from "axios";

async function getProduct(url) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/${url}`);
      return response.data
    } catch (err) {
      console.log(err);
    }
  } 

  export default getProduct