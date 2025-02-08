import axios from "axios"

const base_url = 'http://localhost:3001/api/food';

export const addFood = async (frontendData) => {
    const response = await axios.post(
      `${base_url}/addFood/${frontendData.user_id}`,
      frontendData
    );
    return response.data;
  };