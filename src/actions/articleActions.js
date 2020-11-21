import axios from 'axios';
import { backendUrl } from '@app-helpers/clientConfig';

export const getArticlesList = () => {
    axios({
        method: 'get',
        url: `${backendUrl}articles`,
        responseType: 'application/json',
    }).then((response) => {
        return response.data;
    });
};

async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
