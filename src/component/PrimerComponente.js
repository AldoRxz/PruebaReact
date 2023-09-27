import React, {useState} from 'react';

export const PrimerComponente = () => {

    //let nombre = "Aldo Roman";
    let web = "facebook.com";

    const[nombre, setNombre] = useState("Aldo");

    let cursos=[
        "Master class",
        "python",
        "c++",
        "java",
        "c"
    ]

    let cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
        <h2>Primer Componente</h2>
        <p>Pruba componentes</p>
        <p>Mi nombre es: <stong className={nombre.length <=4 ? 'verde': 'rojo'} >{nombre} </stong> </p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e=> cambiarNombre(e. target.value)} placeholder='Cambia el nombre'></input>

        <button onClick={ e=> cambiarNombre("Aldo Roman web")}>
            Cambiar Nombre
        </button>

        <h2>Cursos</h2>
        <ul>
            {
                cursos.map( (curso, inidce) => {
                    return(
                        <li key={inidce}>
                            {curso}
                        </li>
                    );
                })
            }
        </ul>
    </div>
    
  )
}
