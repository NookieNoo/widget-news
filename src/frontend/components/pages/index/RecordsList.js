import React from 'react';
import Record from '@app-pages/index/includes/Record';
import { getArticlesList } from '@app-actions';

function RecordsList(props) {
    const [state, setState] = React.useState({
        items: [],
        isDataLoaded: false,
    });

    const successCallback = (response) => {
        setState((pr) => {
            return { ...pr, items: response.data, isDataLoaded: true };
        });
    };

    React.useEffect(() => {
        getArticlesList(successCallback);
    }, []);

    return state.isDataLoaded ? (
        <div>
            <ul id="headlines">
                {state.items
                    ? state.items.map((i) => {
                          return <Record key={i.id} data={i} />;
                      })
                    : null}
            </ul>
        </div>
    ) : null;
}

export default RecordsList;
