import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tarjett = ({url}) => {

    const [tarjeta, settarjeta] = useState()
    useEffect(() => {
      axios.get(url)
      .then(res=>settarjeta(res.data))
      .catch(err=>console.log(err))
    }, [])
    console.log(tarjeta)
  return (
    <div className='tar'>
                  <div>
                    {
                    tarjeta?.status=='Alive' ?
                    <div className='est'>
                      <div className='Alive'></div>
                      <div>Vivo</div>
                    </div> :
                    tarjeta?.status=='Dead' ?
                    <div className='est'>
                      <div className='cadaver'></div>
                      <div>cadaver</div>
                    </div> :
                    <div className='est'>
                      <div className='nose'></div>
                      <div>Sin resgistro</div>
                    </div>                 
                
                    }
                    
                    </div>
            <div>
                <img className='imag' src={tarjeta?.image} alt="" />
            </div>
            <div className='text'>
                <div className='name'>{tarjeta?.name}</div>
                <hr />
                <div><span>RAZA:</span>  <br />{tarjeta?.species}</div>
                <div><span>ORIGEN:</span>  <br />{tarjeta?.origin.name}</div>
                <div><span>APARICION EN EPISODIOS:</span>  <br />{tarjeta?.episode.length}</div>
            </div>
    </div>
  )
}

export default Tarjett