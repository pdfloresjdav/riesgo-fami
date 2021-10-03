import axios from "axios";

export let signIn = async (userName, userPassword) => {

  try {
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_API_URL + "/login?dni="+userName+"&password="+userPassword,
      {}
    );
    return response.data
  } catch (error) {
    throw error;
  }
};