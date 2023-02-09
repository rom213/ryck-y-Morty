import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import letras from './assets/imag.webp'
import Tarjett from './Componemt/Tarjett'
import random from './Componemt/random'


function App() {
  const [api, setapi] = useState(0)
  const [randomlocarion, setrandomlocarion] = useState(random)
  const [paginacion, setpaginacion] = useState()
  const [first, setfirst] = useState(0)
  const [tarjetas, settarjetas] = useState()
  const [estado, setestado] = useState(true)
  const [buscador, setbuscador] = useState()
  const [opciones, setopciones] = useState()
  const [posicion, setposicion] = useState()
  const [error, seterror] = useState(false)


  useEffect(() => {
    setestado(false)
    const url=`https://rickandmortyapi.com/api/location/${randomlocarion}`
    axios.get(url)
      .then(res=>setapi(res.data))
      .catch(err=>console.log(err))
  }, [randomlocarion])

useEffect(() => {
const url=`https://rickandmortyapi.com/api/location/?name=${opciones}`
axios.get(url)
  .then(res=>setbuscador(res.data.results))
  .catch(err=>console.log(err))
}, [opciones])






  useEffect(() => {
      if (api){
        let num=Math.ceil((api?.residents?.length)/10)
        let arreglo=[]
        for (let index = 1; index <= num; index++) {
              arreglo.push(index)
        }
        setpaginacion(arreglo)

      }
  }, [api])

useEffect(() => {
  setestado(true)
  setestado(!estado)
  setestado(true)
  if (api) {
  const inicio=first*10
  let final=inicio+10;
  let print=[]
  if ((api?.residents?.length)<=final) {
    final=(api?.residents?.length)
  }

  
  for (let index = inicio; index < final; index++) {
    print.push(api.residents[index])
  }
  settarjetas(print)

  if (api?.residents?.length===0){
    seterror(true)
    console.log('true')
  }else{
    seterror(false)
    console.log('false')
  }
}
}, [api,first])

  

  const handleclick=e=>{
        let cam=(e.target.parentElement.id)-1
        if (first!=cam) {
          setfirst((e.target.parentElement.id)-1);
          setestado(false)
        }
  }
  const handle=(e=>{
    let cam=e.target.parentElement.id
    if (randomlocarion!=cam) {
      setrandomlocarion(e.target.parentElement.id);
      setestado(true)
      setposicion(false)
    }


  })
  const handlechange=(e=>{
        if(e.target.value===''){
          setestado(true)
          setposicion(false)
          setrandomlocarion(random)
        }else{
        setposicion(true)
        setopciones(e.target.value)
        }
  })
  
  
  return (
    <div className="App">
      <div>
      <div className='fix' style={{backgroundImage:`url('https://www.gratistodo.com/wp-content/uploads/2021/09/Fondos-de-pantalla-Rick-y-Morty-Wallpapers-gratistodo.com-1.png')`,backgroundRepeat:'no-repeat',width:'100%',backgroundPosition:'-380px center'}}>
            <img className='letras' src={letras} alt="" />
            <div className='cua'>
                <div className='cua1'>
                    <span>Nombre: </span>
                    <div>{api?.name}</div>
                 
                    <span>Tipo:  </span>
                    <div>{api?.type}</div>
                    

                <div>
                <span>Dimención: </span>
                    <div>{api?.dimension}</div>
                    
                    <span>Poblacion:</span>
                    <div>{api?.residents?.length}</div>
                </div>
                </div>

        </div>
            <div className='form'>
            <form action="">
              <input placeholder='write the name of the planet you want' onChange={handlechange} type="text" className='ing'/>
            </form>
            </div>
        <div>
        </div>
        </div>
        <br />
       
        <div>
          { 
           posicion ?
           <div className='opsi'>
            {
            buscador?.map(bus=>{
               return  <div  id={bus.id}><ul onClick={handle} id={bus.id}>
                <div className='bus'>{bus.name}</div>
                </ul>
                </div>
            })
          }
            </div>
            :
            <div ></div>
          }
          </div>
      </div>


      {  error ?
      <div className='err'>
        <h2 >PLANETA SIN HABITANTES....</h2>
        <h3>Ingresa otra busqueda</h3>
      </div>
      :
      <div>
        <div className='sec3'>
          {
        estado ?
        tarjetas?.map(url=>{   
         return <Tarjett 
         url={url}
         />
         })
         :
         <div className='tras'></div>
        }
        </div>




        <br />
        <div className='content'>
        {
          paginacion?.map((s)=>{
            return <div id={s}> <div id={s} onClick={handleclick} className='pagi'>
                        <h1>{s}</h1>
                    </div>
                    </div>
          })
        }
        </div>
        </div>
        }
    </div>
  )
}

export default App
