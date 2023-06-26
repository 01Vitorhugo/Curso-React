// Conseguimos usar const para criar component e chamar aonde quiser.
const Bemvindo = () =>{
  return(
    <div>
      <h1>Bem Vindo S2</h1>
    </div>
  )
}

// Usando props para deixar o sistema mais independente 
const Bemvindo2 = (props) =>{
  return(
    <div>
      {/* eu chamo o props e puxo o valor do nome, podemos colocar qualquer nome */}
      <h1>Bem Vindo -- {props.nome}</h1>
      <h2>Eu moro -- {props.local}</h2>
    </div>
  )
}

export default function App(){
  return(
    <div>
      <h1>Bem Vindo ao sistema</h1>
      <h2>Vitor Hugo</h2>
      
      {/* chamei a const que eu criei aqui */}
      <Bemvindo/>
      
      {/* usando "nome" para guardar um valor e deixar o sistema mais dinamico */}
      <Bemvindo2 nome="Vitor" local="São Paulo - Itaquera" />
      <Bemvindo2 nome="Lucas"/>
      <Bemvindo2 nome="Henrique"  local="Rio de Janeiro"/>
      <hr/>

      <h1>Olá, Conheça nossa equipe</h1>
      <Equipe nome="Vitor Hugo" cargo="Frent-End" idade="21"/>
    </div>
  )
}

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
    </div>

  );
}

const Sobre = (props) => {
  return(
    <div>
      <h1>Olá, me chamo {props.nome}</h1>
      <h1>Tenho {props.idade} anos</h1>
      <h1>Trabalho como {props.cargo} na empresa DeepCode.</h1>

    </div>

  );


}
