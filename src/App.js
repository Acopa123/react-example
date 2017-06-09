import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credencialActual:{
        nombre: 'Luis Mar',
        avatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png',
        puesto: 'Full Stack Developer'
      },
      empleados:[{
        nombre: 'Luis Mar',
        avatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png',
        puesto: 'Full Stack Developer'
      },
      {
        nombre: 'Antonio Ortega',
        avatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png',
        puesto: 'Back End Developer'
      },
      {
        nombre: 'Jose Acopa',
        avatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png',
        puesto: 'Front End Developer'
      }
    ]
    }

  }
  setCredencialActual(seteo) {
    this.state.credencialActual = seteo
    this.setState(this.state);
  }
  render() {
    const empleados = this.state.empleados
    const credencialActual = this.state.credencialActual
    return (
      <div id='container'>
        <div id='lista-empleados'>
          <ul>
            {empleados.map((empleado1, i)=><EmpleadoItem OnPress={()=>{this.setCredencialActual(empleado1)}} key={i} empleado={empleado1.nombre}/>)}
          </ul>
        </div>
        <Credencial empleado={credencialActual}/>
      </div>
    );
  }
}

class EmpleadoItem extends Component {
  render() {
    const nombreEmpleado = this.props.empleado
    return (
      <li id ='empleado-item' onClick={this.props.OnPress} >{nombreEmpleado}</li>
    )

  }
}

class Credencial extends Component {
  render() {
    const empleado = this.props.empleado
    return(
      <div id='credencial'>
        <img id='imagen' src={empleado.avatar}/>
        <div id='contenido'>
          <h2>{empleado.nombre}</h2>
          <span>{empleado.puesto}</span>
        </div>
      </div>
    )

  }
}
export default App;
