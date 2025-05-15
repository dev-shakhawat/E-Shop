import React from 'react';

function MasterCard({width = 26, height = 17}) {
    return (

        <svg width={width} height={height} viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_21_674)">
                <path d="M9.48486 1.81787H16.5149V15.1818H9.48486V1.81787Z" fill="#FF5F00"/>
                <path
                    d="M9.93133 8.5C9.93133 5.78472 11.1365 3.37639 12.9888 1.81806C11.6275 0.684725 9.90901 0 8.03434 0C3.59313 0 0 3.80139 0 8.5C0 13.1986 3.59313 17 8.03434 17C9.90901 17 11.6275 16.3153 12.9888 15.1819C11.1365 13.6472 9.93133 11.2153 9.93133 8.5Z"
                    fill="#EB001B"/>
                <path
                    d="M26.0001 8.5C26.0001 13.1986 22.4069 17 17.9657 17C16.0911 17 14.3726 16.3153 13.0112 15.1819C14.8859 13.6236 16.0687 11.2153 16.0687 8.5C16.0687 5.78472 14.8636 3.37639 13.0112 1.81806C14.3726 0.684725 16.0911 0 17.9657 0C22.4069 0 26.0001 3.825 26.0001 8.5Z"
                    fill="#F79E1B"/>
            </g>
            <defs>
                <clipPath id="clip0_21_674">
                    <rect width="26" height="17" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
}

export default MasterCard;
