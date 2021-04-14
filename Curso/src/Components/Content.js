import React from 'react'
import Part from './Part'


export default function Content({content}){
  return(
      <div>
        <Part item={content[0]}/>
        <Part item={content[1]}/>
        <Part item={content[2]}/>

      </div>
    
  );

}

