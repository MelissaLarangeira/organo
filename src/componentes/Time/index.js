import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        //rederização condicional - a condição após o && seria o retorno da nossa condicional
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corPrimaria}}>
        <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
           <div className='colaboradores'> 
           {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corSecundaria} key={colaborador.nome}nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
           </div>
        </section>
       
       // renderiação condicional com ternario
      // props.colaboradores.length > 0 ? <section className='time' style={{backgroundColor: props.corPrimaria}}>  
      //  <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
        //   <div className='colaboradores'> 
       //    {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
       //    </div>
       // </section>
       // : ''
    )    
}
export default Time