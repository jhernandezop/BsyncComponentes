import React, { Component } from 'react';
import './ProcesoManual.css';


class ProcesoManual extends Component {
 constructor(props){
    super(props);
    this.state = {
      procesomanualFiltro:[]
    }
    
  }

 componentDidMount() {
    this.componentWillReceiveProps();
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps)
  }

    render(){

        const proceso = this.props.procesomanual;
        const dimension = 100/3 
        const estilos ={ width: dimension+"%"};
        const filtro= this.props.filtro


        const elementos_proceso = proceso.map((number) => (number.ver==true) ?
             
                <li key={number.tag}  className="" style={estilos}>
                  <span className="cantidad" >
                    <div onClick={() => this.props.filtroFichas(number.tag)}>{number.cantidad}</div>
                    <div className="tag"  >{number.tag}</div>
                  </span>
                  
                </li>
              :
                <li key={number.tag}  className="" style={estilos}>
                  <span className="cantidad off" >
                    <div onClick={() => this.props.filtroFichas(number.tag)}>{number.cantidad}</div>
                    <div className="tag"  >{number.tag}</div>
                  </span>
                  
                </li>
        );

        return ( <ul id="linea_proceso" className="linea_proceso" >
                    <span className="linea"></span>
                    {elementos_proceso}
                  </ul>);
    }
}




export default ProcesoManual;
