import axios from 'axios';
import {API_KEY} from '../../env/config.js'

const fetchStyles = async (productId) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`, {
      headers: {
        Authorization: API_KEY
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching styles:", error);
    return [];
  }
};

export default fetchStyles;