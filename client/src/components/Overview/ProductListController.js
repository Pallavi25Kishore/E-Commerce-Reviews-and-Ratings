import axios from 'axios';
import API_KEY from '../../env/config.js'

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
      headers: {
        Authorization: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProducts;