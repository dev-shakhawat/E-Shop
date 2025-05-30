import React from 'react';

function Mail({color = "#303030", width = 20, height = 20, style = ""}) {
    return (

        <svg className={style} width={width} height={height} viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.75">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.29333 16.0642C2.54493 16.1854 2.82293 16.2502 3.10753 16.2502H16.8749C17.0805 16.2502 17.2827 16.2164 17.4741 16.1518L12.0421 10.4728C11.7593 10.7442 11.5067 10.9864 11.2959 11.1878C10.5711 11.8812 9.42873 11.8812 8.70393 11.1878C8.45413 10.949 8.14433 10.6518 7.79493 10.3164L2.29333 16.0642Z"
                      fill={color}/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18.3198 4.43018C17.5204 5.20078 14.9042 7.72258 12.9436 9.60698L18.461 15.3752C18.6484 15.0782 18.75 14.732 18.75 14.3752V5.62518C18.75 5.18718 18.5968 4.76498 18.3198 4.43018Z"
                      fill={color}/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.67134 4.41943C1.38894 4.75583 1.23254 5.18223 1.23254 5.62483V14.3748C1.23254 14.6546 1.29514 14.928 1.41254 15.1762L6.89354 9.44983C4.97574 7.60563 2.50594 5.22443 1.67134 4.41943Z"
                      fill={color}/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.80432 3.7748L9.56792 10.2844C9.80952 10.5156 10.1903 10.5156 10.4319 10.2844C11.9855 8.7982 15.8191 5.1044 17.1955 3.7776C17.0903 3.7594 16.9831 3.75 16.8749 3.75H3.10752C3.00532 3.75 2.90392 3.7584 2.80432 3.7748Z"
                      fill={color}/>
            </g>
        </svg>

    );
}

export default Mail;
