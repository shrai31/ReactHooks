import React from 'react'

function Title() {
    console.log("Rendering the title");
    return (
        <div>
            useCallback Hook
        </div>
    )
}

export default React.memo(Title);
