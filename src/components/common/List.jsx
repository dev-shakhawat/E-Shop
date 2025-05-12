import React from 'react';

function List({arr, boxstyle, liststyle}) {
    return (
        <ul className={boxstyle}>
            {arr.map((item, index) => <li className={liststyle} key={index}>{item.text} {item.icon}</li>)}
        </ul>
    );
}

export default List;
