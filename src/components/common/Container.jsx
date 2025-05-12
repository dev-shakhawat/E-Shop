import React from 'react';

function Container({children}) {
    return (
        <div className={` max-w-[1520px] px-1 lg:px-2 mx-auto  `}>{children}</div>
    );
}

export default Container;