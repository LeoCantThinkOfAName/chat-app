import React from 'react'
import { useParams } from 'react-router-dom';

const Chat = () => {
  const {id} = useParams();

  return (
    <div>
      this is chat page {id}
    </div>
  )
}

export default Chat
