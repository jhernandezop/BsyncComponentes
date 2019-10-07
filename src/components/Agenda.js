import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import './Agenda.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import moment from 'moment';
//import events from './events';
//import ExampleControlSlot from './ExampleControlSlot';
import Draggable from 'react-draggable';
import {Form} from 'react-formio';
require('moment/locale/es.js');

const events = []
const propTypes = {}
const DragAndDropCalendar = withDragAndDrop(Calendar)

class Agenda extends Component {

	constructor(...args) {
	    super(...args)

	    this.state = { 
	    	events,  
	    	expandida:true,
	    	maximixada:false, 
	    	tipificando:false
	    }

	    this.moveEvent = this.moveEvent.bind(this)
    	this.newEvent = this.newEvent.bind(this)
	  }

	componentDidMount(nextProps) {}

	componentWillReceiveProps(nextProps){}

		

	  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
	    const { events } = this.state

	    const idx = events.indexOf(event)
	    let allDay = event.allDay

	    if (!event.allDay && droppedOnAllDaySlot) {
	      allDay = true
	    } else if (event.allDay && !droppedOnAllDaySlot) {
	      allDay = false
	    }

	    const updatedEvent = { ...event, start, end, allDay }

	    const nextEvents = [...events]
	    nextEvents.splice(idx, 1, updatedEvent)

	    this.setState({
	      events: nextEvents,
	    })

	    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
	  }

  resizeEvent = ({ event, start, end }) => {}

  newEvent(event) {
  	const hora = JSON.stringify(moment())
     const title = window.prompt('Agendamiento')

	 if (title){
	     let idList = this.state.events.map(a => a.id)
	     let newId = Math.max(...idList) + 1
	     let hour = {
	       id: newId,
	       title: title,
	       allDay: event.slots.length == 1,
	       start: event.start,
	       end: event.end,
	    }
	    this.setState({
	       events: this.state.events.concat([hour]),
	    })}

	    console.log(this.state.events)


  }

	  handleSelect = ({ start, end }) => {
	  	console.log(start, end)
	  	
	  	
	  }

	

	minimizar(){

		if(this.state.maximixada==true){
			//this.state.maximixada=false
			this.setState({maximixada:false})
		}else{
			this.setState(state => ({
		    expandida: !state.expandida
		  }));
		}
	  

	}

	maximizar(){
		if(this.state.expandida==false){
			//this.state.expandida=false
			this.setState({expandida:true})
		}else{
			this.setState(state => ({
		    	maximixada: !state.maximixada
		  	}));
		}
		
	}

    

enviarGestionAgenda = (event) => {}

  render() {
  	const localizer = momentLocalizer(moment)
	const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    if(this.state.maximixada==false){

    	return (
    		<Draggable  {...dragHandlers}>

		      <div id="Agenda">
		      	<div className="controlador">
		      			<span className="indicador">Agenda</span>
                        <div className="btn-group btn-group-sm" role="group" >
                            <button type="button" className="btn btn-light" onClick={() => this.minimizar()}><i className="fas fa-window-minimize"></i></button>
                            <button type="button" className="btn btn-light" onClick={() => this.maximizar()}><i className="far fa-window-maximize"></i></button>
                            <button type="button" className="btn btn-light" ><i className="fas fa-times"></i></button>
                        </div>
                </div>

                <div className={this.state.expandida ? 'detalleAgenda' : 'detalleAgenda minimizada'}>
			 		
			 		{this.state.tipificando==true && 
			 			<div className="agendamiento">
                            <button type="button" className="btn btn-light" onClick={() => this.setState({tipificando:false})}><i className="fas fa-times"></i></button>
			 				<div><Form form={seguimiento_agenda} onSubmit={this.enviarGestionAgenda} /></div>
			 				<div></div>
			 			</div>
			 		}

			        <Calendar
			          selectable
			          localizer={localizer}
			          events={this.state.events}
			          scrollToTime={new Date(1970, 1, 1, 6)}
			          defaultDate={new Date(2019, 7, 5)}
			          onSelectEvent={event => console.log(event)}
			          onSelectSlot={this.handleSelect}
			          messages={{
			              next: <i className="fas fa-angle-right"></i>,
			              previous: <i className="fas fa-angle-left"></i>,
			              today: "Hoy",
			              month: "Mes",
			              week: "Semana",
			              day: "Día"
			            }}

			          
			        />
		        </div>
		      </div>
      		</Draggable>
      			)
    }else if(this.state.maximixada==true){
		return (
      		<div id="Agenda" className="maximixada">
		      	<div className="controlador">
		      			<span className="indicador">Agenda</span>
                        <div className="btn-group btn-group-sm" role="group" >
                            <button type="button" className="btn btn-light" onClick={() => this.minimizar()}><i className="fas fa-window-minimize"></i></button>
                            <button type="button" className="btn btn-light" onClick={() => this.maximizar()}><i className="far fa-window-maximize"></i></button>
                            <button type="button" className="btn btn-light" ><i className="fas fa-times"></i></button>
                        </div>
                </div>
                <div className={this.state.expandida ? 'detalleAgenda' : 'detalleAgenda minimizada'}>
			        
			        <DragAndDropCalendar
			          
			          messages={{
			              next: <i className="fas fa-angle-right"></i>,
			              previous: <i className="fas fa-angle-left"></i>,
			              today: "Hoy",
			              month: "Mes",
			              week: "Semana",
			              day: "Día"
			            }}
			          //selectable
				      localizer={localizer}
				      events={this.state.events}
				      //onEventDrop={this.moveEvent}
				      //resizable
				      //onEventResize={this.resizeEvent}
				      //onSelectSlot={this.newEvent}
				      //onSelectEvent = {event => this.onSelectEvent(event)} //Fires selecting existing event
				      //onDragStart={console.log}
				      defaultView={Views.MONTH}
				      defaultDate={new Date(2019, 7, 5)}
			        />
		        </div>
		      </div>
			)
      	}
	}


}

const seguimiento_agenda= {
    "display": "form",
    "components": [
        {
            "label": "Field Set",
            "legend": "Agendamiento <div></div>",
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccionar",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": "",
                        "required": true,
                        "select": false
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            
                            {
                                "label": "Agendamiento propio",
                                "value": "agendamiento_propio"
                            },
                            {
                                "label": "Agendamiento a tercero",
                                "value": "agendamiento_tercero"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false,
                    "reorder": false
                },
                {
                    "label": "Comentarios",
                    "showWordCount": false,
                    "showCharCount": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "textarea",
                    "input": true,
                    "key": "comentarios",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "inputFormat": "html",
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "autoExpand": true,
                    "isUploadEnabled": false,
                    "uploadUrl": "",
                    "uploadOptions": "",
                    "uploadDir": "",
                    "reorder": false
                },
                {
		            "label": "Fecha de Agendamiento",
		            "defaultValue": "",
		            "inputFormat": "plain",
		            "key": "fechaDeAgendamiento",
		            "type": "textfield",
		            "input": true,
		             "hidden": true
		        },
                {
                    "label": "Detalle del Agendamiento",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Ejecutivo de Piso",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "select",
                                    "input": true,
                                    "key": "ejecutivoDePiso",
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true,
                                        "select": false
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "data": {
                                        "values": [
                                            {
                                                "label": "",
                                                "value": ""
                                            }
                                        ]
                                    },
                                    "valueProperty": "value",
                                    "lazyLoad": false,
                                    "selectValues": "",
                                    "disableLimit": false,
                                    "sort": "",
                                    "reference": false,
                                    "selectThreshold": 0.3,
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "defaultValue": "",
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        },
                        {
                            "components": [
                                {
                                    "label": "Comentario a ejecutivo",
                                    "autoExpand": false,
                                    "isUploadEnabled": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textarea",
                                    "input": true,
                                    "key": "comentarioAEjecutivo",
                                    "defaultValue": "",
                                    "refreshOn": "submit",
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "inputFormat": "html",
                                    "encrypted": false,
                                    "uploadUrl": "",
                                    "uploadOptions": "",
                                    "uploadDir": "",
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "detalleDelAgendamiento",
                    "conditional": {
                        "show": "true",
                        "when": "select",
                        "eq": "agendamiento_tercero",
                        "json": ""
                    },
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false
                }
                
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },

        {
            "label": "Enviar",
            "state": "",
            "shortcut": "",
            "disableOnInvalid": true,
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "button",
            "key": "submit",
            "input": true,
            "defaultValue": false,
            "validate": {
                "customMessage": "",
                "json": ""
            },
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "encrypted": false,
            "properties": {},
            "showValidations": false,
            "event": "",
            "url": "",
            "custom": "",
            "reorder": false,
            "customConditional": "",
            "logic": [],
            "attributes": {}
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

export default Agenda;