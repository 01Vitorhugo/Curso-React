import React, { Component } from "react";
// Conseguimos usar const para criar component e chamar aonde quiser.
const Bemvindo = () => {
  return (
    <div>
      <h1>Bem Vindo S2</h1>
    </div>
  )
}

// Usando props para deixar o sistema mais independente 
const Bemvindo2 = (props) => {
  return (
    <div>
      {/* eu chamo o props e puxo o valor do nome, podemos colocar qualquer nome */}
      <h1>Bem Vindo -- {props.nome}</h1>
      <h2>Eu moro -- {props.local}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h1>Bem Vindo ao sistema</h1>
      <h2>Vitor Hugo</h2>

      {/* chamei a const que eu criei aqui */}
      <Bemvindo />

      {/* usando "nome" para guardar um valor e deixar o sistema mais dinamico */}
      <Bemvindo2 nome="Vitor" local="São Paulo - Itaquera" />
      <Bemvindo2 nome="Lucas" />
      <Bemvindo2 nome="Henrique" local="Rio de Janeiro" />
      <hr />

      <h1>Olá, Conheça nossa equipe</h1>
      <Equipe nome="Vitor Hugo" cargo="Frent-End" idade="21" facebook="https://google.com" instagram="https://google.com" youtube="https://google.com" />
      <Equipe nome="Kleber Andrade" cargo="Back-End" idade="25" facebook="https://google.com" instagram="https://google.com" youtube="https://google.com" />
      <Equipe nome="Ana Catarina" cargo="Desgner" idade="20" facebook="https://google.com" instagram="https://google.com" youtube="https://google.com" />
      <hr />
      <h1>Grupos</h1>
      <Grupo nome="Vitor Hugo" idade="21" />
      <Grupo nome="Amanda Alves" idade="25" />
      <hr />
    </div>
  )
}

// Mexendo com props e elementos dinamicos para mais de um elemento (EQUIPE).
const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social face={props.facebook} insta={props.instagram} you={props.youtube} />
      <hr />
    </div>

  );
}

const Sobre = (props) => {
  return (
    <div>
      <h1>Olá, me chamo {props.nome}</h1>
      <h1>Tenho {props.idade} anos</h1>
      <h1>Trabalho como {props.cargo} na empresa DeepCode.</h1>

    </div>

  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.insta}>Instagram </a>
      <a href={props.face}>Facbook </a>
      <a href={props.you}>YouTube </a>

    </div>

  );
}

//Class component, sempre que criado, ele EXTENTS COMPONENTE 
//import React, { Component } from "react"; (TEM QUE SEMPRE IMPORTAR).

class Grupo extends Component {
  render() {
    return(
      <div>
        <SobreGrupo nome={this.props.nome} idade={this.props.idade} />


      </div>
    );

  }
}

class SobreGrupo extends Component {
  render() {
    return (
      <div>
        <h1>Funcionario(a) {this.props.nome}</h1>
        <h1> {this.props.idade} Anos.</h1>
      </div>

    );
  }
}