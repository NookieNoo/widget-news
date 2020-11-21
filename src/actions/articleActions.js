import axios from 'axios';
import { backendUrl } from '@app-helpers/clientConfig';

export const getArticlesList = async (successCallback) => {
    try {
        const response = await axios.get(`${backendUrl}articles?_expand=category&_expand=subcategory`);
        successCallback(response);

    } catch (error) {
        console.error(error);
    }
}
