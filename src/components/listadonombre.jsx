import React, {useState} from "react";


const listadonombre = () => {

    return (
        <div>
            <h2>Aplicacion de crud basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    </div>
                    <div className='col'>
                        <h2>Formulario para añadir los nombres</h2>             
                        <form className="form-group">
                        <input className="form-control mb-3" type="text" placeholder= "introduce el nombre"/>
                        <input className="btn btn-infor btn-block" type="submit" value= "Registrar nombre"/>
                        </form>
                    </div>

                </div>
            </div>
    )

}

export default listadonombre