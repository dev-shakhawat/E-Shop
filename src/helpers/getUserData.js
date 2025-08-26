import axios from "axios";

async function getUserData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/userdata` ,  {withCredentials: true} );
      return response.data
    } catch (err) {
      console.log(err);
    }
  } 

  export default getUserData