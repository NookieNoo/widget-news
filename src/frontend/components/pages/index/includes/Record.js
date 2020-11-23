import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

function Record(props) {
    const { id, category, subcategory, publicationDate, content, summary, title } = props.data;

    console.log('props.data', props.data);

    return (
        <li>
            <h2>
                <span className="pubDate">{format(new Date(publicationDate), 'dd.MM.yyyy')}</span>
                <a href="#">{title}</a>
                <span className="category">
                    in <a href="">{category.name}</a>
                </span>
                <span className="category">
                    in <a href="">{subcategory.name}</a>
                </span>
            </h2>
            <p className="summary">{summary}</p>
            <ul className="ajax-load">
                <li>
                    <a href="#">Показать продолжение (POST)</a>
                </li>
                <li>
                    <a href="#">Показать продолжение (GET)</a>
                </li>
            </ul>
            <a href="#" className="showContent">
                Показать полностью
            </a>
        </li>
    );
}

export default Record;

Record.propTypes = {
    data: PropTypes.object.isRequired,
};
