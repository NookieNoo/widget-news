import React from "react";
import format from 'date-fns/format'

function Record(props) {
    return (
        <li>
            <h2>
                <span className='pubDate'>{format(new Date, "dd MMMM")}</span>
                <a href="#">Извлечение данных</a>
                <span className='category'>324</span>
                <span className='category'>324</span>
            </h2>
            <p className='summary'>
                Рассмотрим задачу извлечения данных более подробно
            </p>
            <ul className='ajax-load'>
                <li>
                    <a href='#'>Показать продолжение (POST)</a>
                </li>
                <li>
                    <a href='#'>Показать продолжение (GET)</a>
                </li>
            </ul>
            <a href="#" className='showContent'>Показать полностью</a>
        </li>
    );
}

export default Record;