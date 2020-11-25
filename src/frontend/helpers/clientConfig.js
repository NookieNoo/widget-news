export const baseUrl = process.env.BASE_URL;

export const apiUrl = process.env.API_URL;

/**
 * Если установлен, то обращаемся к api json-server(Придется добавлять префиксы),
 * иначе обращаемся к php-api
 */
export const useJsonServer = process.env.API_SOURCE === "JSON_SERVER";

export const getApiUrl = () => {
    return useJsonServer ? apiUrl : process.env.API_PHP_URL
};
