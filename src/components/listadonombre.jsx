import React, { useState } from "react";
import uniqid from 'uniqid'

const Listadonombre = () => {

    const [nombre, setNombre] = useState('')
    const [Listadonombre, setListadonombre] = useState([])

    const addNombre = (e)=>{
        e.preventDefault();
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadonombre ([...Listadonombre, nuevoNombre])
        setListadonombre ("")
        }


    return (
        
        <div>
            <h2>Aplicacion de crud basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>listado de nombres</h2>
                    <ul className='list-group'> 
                        {
                        Listadonombre.map(item =>
                        <li key="{item.id}" className="list-group-item">{item.tituloNombre}</li>
                        
                        )
                    }
                    </ul>
                    </div>
                    <div className='col'>
                        <h2>Formulario para añadir los nombres</h2>             
                        <form onSubmit={(e) =>addNombre(e)} className="form-group">
                        <input onChange={(e) => {setNombre(e.target.value)}} 
                               className="form-control mb-3" type="text" 
                               placeholder= "introduce el nombre"
                               value={nombre}
                        />
                        <input className="btn btn-infor btn-primary" 
                               type="submit" value= "Registrar nombre"
                        />
                        </form>
                    </div>

                </div>
            </div>
    )

}

export default Listadonombre