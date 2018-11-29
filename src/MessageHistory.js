import React from 'react'
import Message from './Message'
import PropTypes from 'prop-types'
function MessageHistory(props){
    const { messages, username } = props;
    if (messages.length === 0) 
        return (<div className="message-list"></div>)
    else
        return (
            <ul className="message-list">                
            {messages.map((message, index) => (
                <li
                key={index}
                className={message.username === username ? 'message sender' : 'message recipient'}
                >
                <Message username={message.username} text={message.text}/>
                </li>
            ))}
            </ul>
        )
}

/**
 * Validação dos tipos obrigatórios que devem ser repassados pelo componente pai
 */
MessageHistory.propTypes = {
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

/**
 * Exportação do componente para uso
 */
export default MessageHistory