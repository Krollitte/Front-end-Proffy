import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem(){

    return(
        <article className="teacher-item">
        <header>
        <img src="https://avatars0.githubusercontent.com/u/57304383?s=460&u=d9e7376fc81cb76cad16f87d6cae73d4d7acc52e&v=4" alt="Rafael Santos"/>  
        <div>
          <strong> Rafael Santos</strong>
          <span>Linguagem de Programação</span>
        </div>
        </header>
        
        <p>
          Qulquer coisa qualquerjsdbipubdwffaskjdbaipsdbvajsdbkçjasb
          <br/><br/>
          Apaixonado por Programação e tecnologia
        </p>
        
        <footer>
          <p>
            Preço/hora
            <strong>R$ 180,00</strong>
          </p>
        
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
        
        </article>
        
    )

}