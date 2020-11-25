import axios from 'axios';
import { apiUrl, getApiUrl } from '@app-helpers/clientConfig';

export const getArticlesList = async (successCallback) => {
    const baseUrl = getApiUrl();
    console.log("baseUrl", baseUrl);

    try {
        const response = await axios.get(
            // `${apiUrl}articles?_expand=category&_expand=subcategory`
            `${baseUrl}articles?_expand=category&_expand=subcategory`,
            {
                headers: {}
            }
        );
        successCallback(response);
    } catch (error) {
        console.error(error);
    }
};
