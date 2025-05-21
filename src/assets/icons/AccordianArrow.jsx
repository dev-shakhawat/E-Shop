import React from 'react';

function AccordianArrow({width = 32, height = 32, bg = "white", outline = "#FF624C", style}) {
    return (

        <svg className={style} width="32" height="32" viewBox="0 0 32 32" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15.5" transform="matrix(0 -1 -1 0 32 32)" fill={bg} stroke={outline}
                    className={`transition-all duration-300`}/>
            <path
                d="M16 18.4001C16.1023 18.4001 16.2047 18.361 16.2828 18.2829L20.2828 14.2829C20.4391 14.1266 20.4391 13.8735 20.2828 13.7173C20.1265 13.5611 19.8734 13.561 19.7172 13.7173L16 17.4345L12.2828 13.7173C12.1265 13.561 11.8734 13.561 11.7172 13.7173C11.561 13.8736 11.5609 14.1267 11.7172 14.2829L15.7172 18.2829C15.7953 18.361 15.8977 18.4001 16 18.4001Z"
                fill={outline} className={`transition-all duration-300`}/>
        </svg>

    );
}

export default AccordianArrow;
