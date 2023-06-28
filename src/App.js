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
    return (
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
      <h1>Navegação</h1>
      <FooterDonw quem="https://facebook.com" home="htpps://youtube.com" sobre="htpps://github.com" sair="#" />

      <hr/>
      <Contator/>
      <hr/>

      <h1>Tempo</h1>
      <Time />
    </div>
  )
}

class FooterDonw extends Component {
  render() {
    return (
      <div>
        <FooterDonwPrin quem={this.props.quem} home={this.props.home}
          sobre={this.props.sobre} sair={this.props.sair} />
      </div>
    );
  }
}

class FooterDonwPrin extends Component {
  render() {
    return (
      <div>
        <a href={this.props.quem}> Quem-Somos |</a>
        <a href={this.props.home}> Home |</a>
        <a href={this.props.sobre}> Sobre |</a>
        <a href={this.props.sair}> Sair </a>

      </div>
    );
  }
}




//Mexendo com STATES, STATES são estados que da para mexer no valores

class Contator extends Component{

  //construtor que sempre recebe props.
  constructor(props){

    //Para ele poder acessar todas as informacoes.
    super(props);

    //Todas as STATES vai nele.
    this.state = {
      nome: 'Vitor Hugo',
      contador: 0
    }

    //Para ser indentificado e ser usado as funcoes
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }
  aumentar(){
    // console.log('Aumentou!!!!');

    let state = this.state;
    state.contador += 1;
    state.nome = 'Vitor Hugp';

    //Para alterar STATE
    this.setState(state);

    if(state.contador === 10){

     state.nome = "João";
    }else if(state.contador === 15){
     state.nome = "Kleber";
     
  }
  
  }

  diminuir(){

    let state = this.state;
    state.contador -= 1;
    state.nome = 'Jose';
    this.setState(state);

    if(state.contador <= 0){
      alert('Ops, Chegou a 0');
    }

   
  }

  render(){
    return(
      <div>
        {this.state.nome}

        <h1>Criando contador</h1>

        <h2> <button onClick={this.diminuir}>-</button> {this.state.contador} <button onClick={this.aumentar}>+</button> </h2>
      </div>
    );
  }
}

class Time extends Component{

    constructor(props){
    super(props);
    this.state = {
      timer: '00:00:00',
      nome: 'Vitor '



    }
  }

  // essa funçao serve para rodar algo ou ate mesmo consumir uma API
  componentDidMount(){

    setInterval(() =>{

      this.setState({timer: new Date().toLocaleTimeString() })

    }, 1000);

  }

  // Ele mostra as atualicoes 
  // componentDidUpdate(){
  //   console.log('Atualizou !!!!')
  // }


  
  // ele retorna TRUE e FALSE, da para fazer comparaçoes entre States
  // shouldComponentUpdate(){

  // }


  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h1>{this.state.timer}</h1>
      </div>
    );
  }
  
}


