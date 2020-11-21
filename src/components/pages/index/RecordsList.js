import React from 'react';
import Record from '@app-pages/index/includes/Record';
import axios from 'axios';
import { backendUrl } from '@app-helpers/clientConfig';
import { getArticlesList } from '@app-actions';

function RecordsList(props) {
    const [state, setState] = React.useState({
        items: [],
        isDataLoaded: false,
    });

    React.useEffect(() => {
        const data = getArticlesList();
        getArticlesList().then(data => console.log('data', data));

        setState((pr) => {
            return { ...pr, items: data, isDataLoaded: true };
        });

        // axios({
        //     method: 'get',
        //     url: `${backendUrl}articles`,
        //     responseType: 'application/json',
        // }).then((response) => {
        //     console.log(response);
        //     setState((pr) => {
        //         return { ...pr, items: response.data, isDataLoaded: true };
        //     });
        // });
    }, []);


    console.log(state);
    return (
        <div>
            <ul id="headlines">
                {state.items
                    ? state.items.map((i) => {
                          return <Record key={i.id} data={i} />;
                      })
                    : null}
            </ul>
        </div>
    );
}

export default RecordsList;
