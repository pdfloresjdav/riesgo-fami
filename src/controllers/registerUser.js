import axios from "axios";
// Register with API
export let registerUser = async (userName,userEmail,userDni,userPassword,userConfPassword) => {

  try {
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_API_URL + `/register?name=${userName}&email=${userEmail}&password=${userPassword}&dni=${userDni}&password_confirmation=${userConfPassword}`,
      {}
    );
    return response.data
  } catch (error) {
      console.log(error)
    throw error;
  }
};