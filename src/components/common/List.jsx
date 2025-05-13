import React from 'react';
import {Link} from "react-router";

function List({arr, boxstyle, liststyle}) {
    return (
        <ul className={boxstyle}>
            {arr.map((item, index) => <li key={index}><Link className={liststyle}
                                                            to={item.link}>{item.text} {item.icon}</Link>
            </li>)}
        </ul>
    );
}

export default List;
