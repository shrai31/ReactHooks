// Just make the consumption is simpler.

import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../context/UserContext';

function UseContextHooks() {
    const user =  useContext(UserContext)
    const sname = useContext(ChannelContext)

    return (
        <div>
            {user} <br/>
            {sname}
        </div>
    )
}

export default UseContextHooks;
