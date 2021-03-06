import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Course({course}){
  return(
    <div>
  
      <Header title={course.name}/>
      <Content content={course.parts}/>
      
    </div>
  );

}