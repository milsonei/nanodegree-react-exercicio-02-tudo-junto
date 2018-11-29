import React from 'react'
function Message(props){
    const {username, text} = props
    return (
        <p>{`${username}: ${text}`}</p>
    )
}

/**
 * Exportação do componente para uso
 */
export default Message