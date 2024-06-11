import axios from 'axios';
import API_KEY from '../../env/config.js'

const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, {
      headers: {
        Authorization: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default fetchProduct;