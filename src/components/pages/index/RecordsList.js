import React from "react";
import Record from "@app-pages/index/includes/Record";

import axios from "axios";

function RecordsList(props) {
    const [state, setState] = React.useState({
        items: [],
        totalRows: 0
    });

    React.useEffect(
        () => {
            axios({
                method: "get",
                // url: "http://widget-news.loc/articles",
                url: "http://localhost:21555/posts",
                responseType: "application/json"
            }).then((response) => {
                console.log(response);
                setState({ ...response.data });
            });
        },
        []
    );

    { console.log(state) }
    return (
        <div>
            <ul id="headlines">
                {state.items ?
                    state.items.map((i) => {
                            return <Record key={i.id} data={{...i}}/>
                        })
                    : null
                }
            </ul>
        </div>
    );
}

export default RecordsList;