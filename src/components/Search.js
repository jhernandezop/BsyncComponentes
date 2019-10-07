import React, { Component } from 'react';
import './Search.css';



class Search extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {  
       subFiltros: [],
    }
  }
  componentDidMount(nextProps) {
    
  }

  componentWillReceiveProps(nextProps){
    
  }

  handleChange(event) {
    //console.log(event.target.value);

    
  }

  actualizarSubFiltros(procesomanual){

  }
actualizarSearch = (event) => {
     

}

filtrogrupoCandidato = (event) => {
      
}


  
    render(){
      
      //FILTROS

      const filtro = [{tag:"a", ver:true, cantidad:"0"}]

      //TAGS VISUALES //
      const filtro_fichas = filtro.map(number => {
          return(<span className="padre">
                    <span key={number.tag} onClick={() => this.filtrogrupoCandidato(number.tag)} className={number.ver ? 'badge badge-dark' : 'badge badge-dark off'}>
                      {number.tag}&nbsp;
                      <span id={"counter_"+number.tag} className="badge badge-light">{number.cantidad}</span>
                    </span>
                </span>
          )
          }        
      );

      
      return ( 
          <div id="search">
            <div >
              <div className="col-auto">
                <div className="input-group mb-2">
                  <input onChange={this.actualizarSearch} type="text" className="form-control"  placeholder="Buscar" />
                  <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="marcas">{filtro_fichas}</div>
        </div> 
         
      ); 
  }
}



export default Search;

