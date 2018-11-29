
import React from 'react';
import MessageHistory from './MessageHistory'
import AddMessage from './AddMessage'
import PropTypes from 'prop-types'
function ChatWindow(props){
    const { onSendMessage, messages, username} = props        
    return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{username}</div>
                    <MessageHistory username={username} messages={messages}/>        
                <div>
                    <AddMessage username={username} onSendMessage={onSendMessage}/>
                </div>
            </div>
    )
}
ChatWindow.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}
export default ChatWindow