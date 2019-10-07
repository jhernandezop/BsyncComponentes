import React, { Component } from 'react';
import {Form} from 'react-formio';
import './AreaEdicion.css';
import moment from 'moment';


class AreaEdicion extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
      return ( 
          <div className='row contenedorFormularios'>{  <Form src="https://nhgtjjozhnwcdxx.form.io/tipificagestionwebllamada" submission="{data: children: [{comentarios:'rtertyt'}]}"  onSubmit={console.log} /> }</div> 
      );   
  }
}


export default AreaEdicion;

