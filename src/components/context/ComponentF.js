import React, { useState } from 'react'
import { ChannelConsumer, UserConsumer } from './UserContext'

export default function ComponentF() {
  const [name, setName]=useState({
    fname:"",
    lname:"",
  });
  return (
    <div>
      <UserConsumer>
        {
          user =>{
            return(
              <ChannelConsumer>
                {
                 channel =>{
                    return <div>Hi {user} is {channel} </div> //your random name is {channel}
                  }
              }
              </ChannelConsumer>
           )
          }
        }
      </UserConsumer>
    </div>
  )
}
