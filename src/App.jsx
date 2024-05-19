import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRequest, setIsRequest] = useState(false)
  
  const CapEmail = (event) => {
    setError(null)
    setEmail(event.target.value);
  }

  const CapPassword = (event) => {
    setError(null)
    setPassword(event.target.value)
  }

  const handleSubmit = () => {

    setError(null)
    setIsRequest(true)

    const value = {
      email: email,
      password: password, 
    }
    
    login(value).then(() => {
      alert("Login Efetuado com sucesso.")
    }).catch((error) => {
      alert(error.message)
      setError(error)
      }).finally(() => {
      setIsRequest(false)
    });
  }
  
 

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email}  onChange={CapEmail}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={CapPassword}/>
        </div>

        <div className='button'>

  <button onClick={handleSubmit} disabled={email === '' || password.length < 6 || isRequest}> {isRequest ? "Logging..." : "Login"} </button>
        </div>
      </div>
    </div>
  );
}