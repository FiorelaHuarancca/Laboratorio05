import React from 'react'

export default function Part({item}){
  return(
      <div>
          <h3>
              Parte {item.id}
          </h3>
        <p>ID: {item.id}</p>
        <p>NOMBRE: {item.name}</p>
        <p>EJERCICIO: {item.exercises}</p>

      </div>

    
  );

}