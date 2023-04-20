import axios from "axios";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Error while catching add user api`, error);
  }
};
