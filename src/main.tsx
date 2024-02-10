import React from 'react'
//ReactDOM reprsentaçao do html atraves do javascript, integrando o react para funcionar no ambiente web
import ReactDOM from 'react-dom/client' 
import {App} from './App.jsx'

//createroot é o elemento raiz do html é o root, o react vai escrever todo o html, css e javascript 
//dentro da div root esta no index, esse arquivo chama o metodo render que usa sintax semelhante ao 
//html, jogando o conteudo do javascript para dentro do root
//criar html atraves do javascript
//na verdade é como se fosse o index
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
