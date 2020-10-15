import React from "react";
import Record from "@app-pages/index/includes/Record";

function RecordsList(props) {
    return (
        <div>
            <ul id="headlines">
                <Record />
                <Record />
                <Record />
            </ul>
        </div>
    );
}

export default RecordsList;