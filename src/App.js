import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/login'; 
import ConstruirFichas from './components/ConstruirFichas';
import AreaEdicion from './components/AreaEdicion';
import ProcesoManual from './components/ProcesoManual';
import Vertelefono from './components/VerTelefono';
import Agenda from './components/Agenda';
import Search from './components/Search';
import Timelines from './components/Timeline';
import ReporteUsuario from './components/ReporteUsuario';
import ReporteSupervisor from './components/ReporteSupervisor';
import moment from 'moment';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       expandida: true,
       estadoLogin:true,
       tipoLogin:"standar",
       anexo:"3099",
       interfaz:"gestion",
       fichas:[{"acciones":[{"accion":"Crear"}],"caso_campania":"","caso_canal":"web","caso_estado":"en gestion","caso_face_user":"3099","caso_gestiones":"1","caso_grupoC":"opCER_web:5","caso_id":"en gestionopCER_web","caso_origen":"sga","caso_padre":"","caso_tipo":"","caso_ts":"1570136582221","caso_ts_str":"2019-10-03T18:03:02.221","caso_ts_ult_ges":"2019-10-03T18:03:37.285","caso_tso":"2019-10-03T18:03:02.201","datos_ficha":{"doc_Ap_paterno":"CARMONA","doc_cod_MarcaAX":"HYU","doc_no_correo":"lcarmona@openpartner.cl","doc_nombre":"LUIS","doc_nu_celular":"974797776","doc_nu_telefono":"","doc_nucotizacion":"809704","doc_puntoVenta":"AG99999","doc_rutConsultor":"25584175-0"},"timeline":[{"evento":""}],"selcionada":false,"gruposCandidatos":"opCER_web","key_orden":"1570136582"},{"acciones":[{"accion":"Crear"}],"caso_campania":"","caso_canal":"web","caso_estado":"en gestion","caso_face_user":"3099","caso_gestiones":"1","caso_grupoC":"opCER_web:5","caso_id":"en gestionopCER_web","caso_origen":"sga","caso_padre":"","caso_tipo":"","caso_ts":"1570136469939","caso_ts_str":"2019-10-03T18:01:09.939","caso_ts_ult_ges":"2019-10-03T18:01:44.013","caso_tso":"2019-10-03T18:01:09.919","datos_ficha":{"doc_Ap_paterno":"CARMONA","doc_cod_MarcaAX":"HYU","doc_no_correo":"lcarmona@openpartner.cl","doc_nombre":"LUIS","doc_nu_celular":"974797776","doc_nu_telefono":"","doc_nucotizacion":"809704","doc_puntoVenta":"AG99999","doc_rutConsultor":"25584175-0"},"timeline":[{"evento":""}],"selcionada":false,"gruposCandidatos":"opCER_web","key_orden":"1570136469"},{"acciones":[{"accion":"Crear"}],"caso_campania":"","caso_canal":"web","caso_estado":"en gestion","caso_face_user":"3099","caso_gestiones":"1","caso_grupoC":"opCER_web:5","caso_id":"en gestionopCER_web","caso_origen":"sga","caso_padre":"","caso_tipo":"","caso_ts":"1570136190242","caso_ts_str":"2019-10-03T17:56:30.242","caso_ts_ult_ges":"2019-10-03T17:57:12.328","caso_tso":"2019-10-03T17:56:30.220","datos_ficha":{"doc_Ap_paterno":"CARMONA","doc_cod_MarcaAX":"HYU","doc_no_correo":"lcarmona@openpartner.cl","doc_nombre":"LUIS","doc_nu_celular":"974797776","doc_nu_telefono":"","doc_nucotizacion":"809704","doc_puntoVenta":"AG99999","doc_rutConsultor":"25584175-0"},"timeline":[{"evento":""}],"selcionada":false,"gruposCandidatos":"opCER_web","key_orden":"1570136190"},{"acciones":[{"accion":"Crear"}],"caso_campania":"","caso_canal":"web","caso_estado":"en gestion","caso_face_user":"3099","caso_gestiones":"1","caso_grupoC":"opCER_web:5","caso_id":"en gestionopCER_web","caso_origen":"sga","caso_padre":"","caso_tipo":"","caso_ts":"1570134579191","caso_ts_str":"2019-10-03T17:29:39.191","caso_ts_ult_ges":"2019-10-03T17:31:27.417","caso_tso":"2019-10-03T17:29:39.171","datos_ficha":{"doc_Ap_paterno":"CARMONA","doc_cod_MarcaAX":"HYU","doc_no_correo":"lcarmona@openpartner.cl","doc_nombre":"LUIS","doc_nu_celular":"974797776","doc_nu_telefono":"","doc_nucotizacion":"809704","doc_puntoVenta":"AG99999","doc_rutConsultor":"25584175-0"},"timeline":[{"evento":""}],"selcionada":false,"gruposCandidatos":"opCER_web","key_orden":"1570134579"},{"acciones":[{"accion":"Crear"}],"caso_campania":"","caso_canal":"web","caso_estado":"nuevo","caso_face_user":"3099","caso_gestiones":0,"caso_grupoC":"opCER_web:5","caso_id":"nuevoopCER_web","caso_origen":"sga","caso_padre":"","caso_tipo":"","caso_ts":"1570134205239","caso_ts_str":"2019-10-03T17:23:25.239","caso_ts_ult_ges":"2019-10-03T17:23:37.239","caso_tso":"2019-10-03T17:23:25.219","datos_ficha":{"doc_Ap_paterno":"CARMONA","doc_cod_MarcaAX":"HYU","doc_no_correo":"lcarmona@openpartner.cl","doc_nombre":"LUIS","doc_nu_celular":"974797776","doc_nu_telefono":"","doc_nucotizacion":"809704","doc_puntoVenta":"AG99999","doc_rutConsultor":"25584175-0"},"timeline":[{"evento":""}],"selcionada":false,"gruposCandidatos":"opCER_web","key_orden":"1570134205"}],
       fichasEnCola:0,
       fichasDescartadas:0,
       fichasExito:0,
       opcionesOsuario:[
                        {
                          opcion:"fab fa-trello", 
                          funcion:"gestion",
                          ver: false
                        },{
                          opcion:"far fa-calendar-alt", 
                          funcion:"agenda",
                          ver: false
                        },
                        {
                          opcion:"fa fa-headset", 
                          funcion:"telefono",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-pie", 
                          funcion:"reportes_supervisor",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-line", 
                          funcion:"reporte",
                          ver: false
                        },
                        
                        {
                          opcion:"fas fa-users-cog", 
                          funcion:"supervision",
                          ver: false
                        },
                        {
                          opcion:"fas fa-user-times", 
                          funcion:"salir",
                          ver: true
                        }
                       ],
       procesomanual:[
                        {tag:"nuevo", cantidad:1, ver: true},
                        {tag:"en gestion", cantidad:2, ver: true},
                        {tag:"agendado", cantidad:3, ver: true},
                        
                      ]
     }
  }

  render() {
      return (
        <div className="container-fluid h-100">
          <Vertelefono anexo={this.state.anexo} />
          <Agenda />
          <div className="row">
            <div className="col-12">
              <OpcioneDeNavegacion opciones={this.state.opcionesOsuario} />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                <div id="barra_lateral_fichas" className="col-2" style={{display: (this.state.expandida ? 'block' : 'none')}}>
                   <div className="row h-25">
                      <Search />
                   </div>
                   <div className="row h-75">
                      <ConstruirFichas  anexo={this.state.anexo} fichas={this.state.fichas} />
                    </div>
                </div>
                <div className={this.state.expandida ? 'col-8' : 'col-12'}>
                  <div className="row h-100">
                      <div id="indicadores" className="col-12 h-25">
                         <div className="row contenedor_indicadores">
                            
                            <div className="col-2">
                                <a className="expandir" onClick={this.interfazExpandida}> 
                                    {this.state.expandida ? <i className="fas fa-angle-left"></i> : <i className="fas fa-angle-right"></i>}
                                </a>
                              <div className="row indicaddor">
                                <div className="col-12">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasEnCola}</div>
                                      <div className="col-12 descripcion">Con. en Cola</div>
                                   </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="row">
                                  <ProcesoManual procesomanual={this.state.procesomanual} />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="row indicaddor">
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasDescartadas}</div>
                                      <div className="col-12 descripcion">Descartados</div>
                                   </div>
                                </div>
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasExito}</div>
                                      <div className="col-12 descripcion">Exitos</div>
                                   </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-12 h-75" >
                        <div className="row h-100">
                          <div  className="col-12 h-100">
                                <AreaEdicion />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div id="lateral_derecho" className={this.state.expandida ? 'col-2 h-100' : 'col-3 h-100'} style={{display: (this.state.expandida ? 'block' : 'none')}}>
                      <div className="row h-25" ></div>
                      <div id="lineadetiempo" className="row h-75" >
                        <Timelines  edicion={this.state.edicion}/>
                      </div>
                </div>
            </div>
          </div>
        );
     
  }
}

class OpcioneDeNavegacion extends Component {


  interfazExpandida = (event) => {

    event.preventDefault();
    this.props.interfazExpandida(this.props);
  }

  render() {

    const opciones = this.props.opciones
    const listItems = opciones.map((number) => 

      <button key={number.opcion} type="button" className="btn btn-light">
        <i className={number.opcion}></i>
      </button>
      

    );
    
    return (
      <div id="navegacion" className="row">
        <nav className="navbar navbar-light bg-light">
          <li className="navbar-brand"></li>
          <div className="btn-group" role="group" aria-label="Basic example">
            {listItems}
          </div>
        </nav>
      </div>
    );
  }

}





export default App;

