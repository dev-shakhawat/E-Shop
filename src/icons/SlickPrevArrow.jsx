import React from 'react';

function SlickPrevArrow({width = 40, height = 40, color = "#303030", onClick}) {
    return (

        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={`cursor-pointer absolute top-[50%] -translate-y-[50%] -left-[50px]  `}
             onClick={onClick}>
            <circle cx="20" cy="20" r="19.5" stroke="#303030"/>
            <path
                d="M17 20C17 19.8721 17.0488 19.7441 17.1465 19.6465L22.1465 14.6465C22.3418 14.4511 22.6582 14.4511 22.8535 14.6465C23.0487 14.8418 23.0488 15.1582 22.8535 15.3535L18.207 20L22.8535 24.6465C23.0488 24.8418 23.0488 25.1582 22.8535 25.3535C22.6581 25.5487 22.3417 25.5488 22.1465 25.3535L17.1465 20.3535C17.0488 20.2558 17 20.1278 17 20Z"
                fill={color}/>
        </svg>

    );
}

export default SlickPrevArrow;
