import React from 'react';
function Container({ children }) {

    return (
        <div style={container}>
            {children}
        </div>
    )
    
}
const container = {
    padding: '30px 40px',
    minHeight: 'calc(100vh - 120px)'
}

export default Container;
