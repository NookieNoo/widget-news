import axios from 'axios';
import { apiUrl } from '@app-helpers/clientConfig';

export const getArticlesList = async (successCallback) => {
    try {
        const response = await axios.get(
            `${apiUrl}articles?_expand=category&_expand=subcategory`
        );
        successCallback(response);
    } catch (error) {
        console.error(error);
    }
};
