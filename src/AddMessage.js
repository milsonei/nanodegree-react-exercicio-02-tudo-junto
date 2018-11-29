import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component{
    state = {
        message:''
    }

    /**
     * Função executada após o componente estar disponível
     */
    componentDidMount(){
        this.focusTextInput();
    }

    /**
     * Usa `ref` callback para armazenar uma referência para o elemento text input DOM em um campo de instância (por exemplo, this.textInput).
     **/
    setTextInputRef = (element) => {
        this.textInput = element;
    }

     /**
   * Redireciona o foco do elemente input usando a raw DOM API
   */
    focusTextInput =() => {
        if (this.textInput) this.textInput.focus();
    }

    /**
     * O usuário só pode enviar, caso o mesmo tenha digitado alguma mensagem
     */
    isDisabled = () => this.state.message === '';
    /**
     * Altera o atributo message da variável state com o dado inputado pelo usuário
     */
    handleChange = (e) => {         
        this.setState({ message: e.target.value });
    }

    /**
     * Limpa o campo value do objeto state
     */
    clear = () => {
        this.setState({ message: '' })
    };

    /**
     * Envia a mensagem para o componente pai
     */
    handleSubmit = (e) => {
        e.preventDefault();  
        this.props.onSendMessage(this.props.username, this.state.message)
        this.clear();
    }

    /**
     * Renderiza o componente controlado
     */
    render(){     
        return (            
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input 
                    ref={this.setTextInputRef} 
                    type="text" className="form-control" 
                    onChange={this.handleChange} 
                    value={this.state.message}
                    placeholder="Enter your message..." />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>            
        )
    }
}
/**
 * Validação dos tipos obrigatórios que devem ser repassados pelo componente pai
 */
AddMessage.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

/**
 * Exportação do componente para uso
 */
export default AddMessage