import { useState } from 'react';

import { FiSearch } from 'react-icons/fi'
import './style.css'

import api from './services/api'



function App() {

  const [input, setInput] = useState('');

  const [cep, setCep] = useState({});


  //async pq ira fazer uma requisição na internet

  async function handleSearch(){
    //se o usuario n digitar nada
    if(input === ''){
      alert("Digite um Cep")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
      
      
    }catch{
      alert("erro ao buscar")
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite Seu Cep..."
          value={input}
          onChange={(evento) => setInput(evento.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>         
      </div>

      {Object.keys(cep).length > 0 && (
         <main className='main'>
         <h2>CEP: {cep.cep}</h2>
         <span>{cep.logradouro}</span>
         <span>{cep.bairro}</span>
         <span>{cep.localidade} - {cep.uf}</span> 

         
     </main>
      )}

     

    </div>
  );
}

export default App;
