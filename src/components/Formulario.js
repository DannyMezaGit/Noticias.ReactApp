import React, { Component } from 'react';

class Formulario extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form action="">
                        <h2>Encuentra Noticias por Categoria</h2>

                        <div className="input-field s12 m8">
                            <select 
                                onChange = { this.cambiarCategoria }
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologías</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;