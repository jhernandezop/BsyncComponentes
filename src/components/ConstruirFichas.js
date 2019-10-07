import React, { Component } from 'react';
//import * as d3 from "d3";
import './login.css';
import './ficha.css';
import moment from 'moment';


class ConstruirFichas extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       fichas:[],
       peticion_detalle:false
     }
  }
  render(){
      const grupos = this.props.grupos;
      const fichas = this.props.fichas;
      console.log(this.props)
      const grupo_fichas = fichas.map((number) => {
        if(number.caso_canal=="tel"){
          return (
            <UnaFichaTelefonia 
                  key={number.caso_id} 
                  datosFicha={number} 
                />
          )
        }else if(number.caso_canal=="web"){
          return (
              <UnaFichaCotizacionWeb 
                  key={number.caso_id} 
                  datosFicha={number} 
                />
          )
        }
      }      
    );
      
      return ( 
          <div id="divFichas" className='row'>
            <div id="lista_fichas" className="col-sm-12 col-md-12 col-lg-12 accordion h-75"  >
                {grupo_fichas}
            </div>
          </div> 
         
      ); 
  }
}

class UnaFichaTelefonia extends Component {
  constructor(props) {
    super(props);
    this.state = {  
          canal:this.props.datosFicha.caso_canal,
          anexo:this.props.anexo,
          acciones: this.props.datosFicha.acciones,
          caso_CAM: "",
          caso_ES: this.props.datosFicha.caso_id,
          datos_ficha: this.props.datosFicha,
          estado_proceso: "",
          nro_gestion: "",
          timeline: this.props.datosFicha.timeline,
          tipo_caso:this.props.datosFicha.tipo,
          tipificacion:this.props.datosFicha.tipificacion,
          selcionada:this.props.datosFicha.selcionada
    }
  }

  llamarFormulario= (event) => {console.log(this.props.peticion_detalle)}

  llamarCliente(numero) {console.log(numero)}

  render(){
     const indicador_b=moment(this.state.datos_ficha.caso_ts_str).format("HH:MM:SS");
    const detalle = this.state.datos_ficha
    const estado_proceso=this.state.estado_proceso
    const filtro= this.props.filtro
    const tipo_caso=this.state.tipo_caso
    const tipificacion=this.state.tipificacion
    
      return ( <div className={this.state.selcionada ? 'selecionada card ficha' : 'card ficha'}  onDoubleClick = {this.llamarFormulario}>
             <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne_"+this.state.caso_ES.replace(".","")} aria-expanded="false" aria-controls={"collapseOne_"+this.state.caso_ES.replace(".","")}>
                    <div className="row">
                      <div className="col-12"><i className="fas fa-mobile-alt"></i> Telefónica</div>
                      <div className="col-12 cotizacion"><i className="far fa-hand-paper"></i> {this.state.caso_ES}</div>
                      <div className="col-12"><i className="far fa-calendar-alt"></i> 
                        {" "+moment(detalle.caso_ts_str).format("DD-MM-YYYY")}
                        {" "+moment(detalle.caso_ts_str).format("HH:MM:SS")}
                        
                      </div>
                    </div>
                    
                    
                  </button>
                </h2>
              </div>
              <div id={"collapseOne_"+this.state.caso_ES.replace(".","")} className="collapse" aria-labelledby="headingOne" data-parent="#lista_fichas">
                <div className="card-body detalle">
                  
                  <div className="row">
                      <div className="col-12">{detalle.datos_ficha.doc_nu_celular}</div>
                      <div className="col-12">{detalle.datos_ficha.doc_puntoVenta}</div>
                    </div>

                </div>
              </div>
              <div className="card-body telefono">
                <button type="button" onClick={() => this.llamarCliente(detalle.datos_ficha.doc_nu_celular)} className="btn btn-light">
                    <i className="fas fa-headset"></i> {detalle.datos_ficha.doc_nu_celular}
                    <span className="nro_gestion badge badge-pill badge-light">{detalle.datos_ficha.caso_gestiones}</span>
                </button>

              </div>


            </div> 
        )
     
   }

}

class UnaFichaCotizacionWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {  
          canal:this.props.datosFicha.canal,
          anexo:this.props.anexo,
          acciones: this.props.datosFicha.acciones,
          caso_CAM: "",
          caso_ES: this.props.datosFicha.caso_id,
          datos_ficha: this.props.datosFicha,
          estado_proceso: "",
          nro_gestion: "",
          timeline: this.props.datosFicha.timeline,
          tipo_caso:this.props.datosFicha.tipo,
          tipificacion:this.props.datosFicha.tipificacion,
          selcionada:this.props.datosFicha.selcionada,
          gc:this.props.datosFicha.gruposCandidatos
    }
  }

  

  llamarFormulario= (event) => {console.log(this.props.peticion_detalle)}

  llamarCliente(numero) {console.log(numero)}

  filtrarFicha(ficha){console.log(ficha)}

  render(){
    console.log(this.state.datos_ficha)
    const indicador=this.state.datos_ficha.caso_ts_str.split("T", 2);
    const detalle = this.state.datos_ficha;
    const estado_proceso=this.state.estado_proceso;
    const filtro= this.props.filtro;
    const tipo_caso=this.state.tipo_caso;
    const tipificacion=this.state.tipificacion;
      return ( <div className={this.state.selcionada ? 'selecionada card ficha' : 'card ficha'}  onDoubleClick = {this.llamarFormulario}>
             <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne_"+this.state.caso_ES.replace(".","")} aria-expanded="false" aria-controls={"collapseOne_"+this.state.caso_ES.replace(".","")}>
                    <div className="row">
                      <div className="col-12"><i className="fas fa-globe"></i> Web</div>
                      <div className="col-12 cotizacion"><i className="far fa-hand-paper"></i> {detalle.datos_ficha.doc_nucotizacion}</div>
                      <div className="col-12"><i className="far fa-calendar-alt"></i> 
                        {moment(indicador[0]).format("DD-MM-YYYY")}, {indicador[1]}</div>
                      
                    </div>
                    
                    
                  </button>
                </h2>
              </div>
              <div id={"collapseOne_"+this.state.caso_ES.replace(".","")} className="collapse" aria-labelledby="headingOne" data-parent="#lista_fichas">
                <div className="card-body detalle">
                  
                  <div className="row">
                      <div className="col-12">{detalle.datos_ficha.doc_nombre+' '+detalle.datos_ficha.doc_Ap_paterno}</div>
                      <div className="col-12">{detalle.datos_ficha.doc_rutConsultor}</div>
                      <div className="col-12">{detalle.datos_ficha.doc_no_correo}</div>
                      <div className="col-12">{detalle.datos_ficha.doc_puntoVenta}</div>
                    </div>

                </div>
              </div>
              <div className="card-body telefono">
                <button type="button" onClick={() => this.llamarCliente(detalle.datos_ficha.doc_nu_celular !="" ? detalle.datos_ficha.doc_nu_celular : detalle.datos_ficha.doc_nu_telefono)} className="btn btn-light">
                    <i className="fas fa-headset"></i> {detalle.datos_ficha.doc_nu_celular !="" ? detalle.datos_ficha.doc_nu_celular : detalle.datos_ficha.doc_nu_telefono}
                    <span className="nro_gestion badge badge-pill badge-light">{detalle.datos_ficha.caso_gestiones}</span>
                </button>
              </div>
            </div> 
        )
      
   }

}
export default ConstruirFichas;

