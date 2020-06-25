import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import Table from 'react-bootstrap/Table'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filesArray:[]
    }
  }
  fileHandle = (file) => {
    this.setState({
      filesArray:this.state.filesArray.concat(file)
    })
    console.log(this.state.filesArray)
  }
  render() {
    return (
        <div className='App'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='center'>
          React File Upload
        </div>
        <br/>
        <div className='dropzone'>
        <Dropzone onDrop={acceptedFiles => this.fileHandle(acceptedFiles)} 
        noClick={true}
        noKeyboard={true}
        >
          {({getRootProps, getInputProps,open}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <button style={{color:'green'}} type="button" onClick={open}>
              Open File Dialog
        </button>
          </div>
        </section>
      )}
    </Dropzone>
    </div>
    <Table striped bordered hover variant="dark" align='center'>
      <thead>
        <tr>
        <td>File name</td>
        <td>File size</td>
        <td>Actions</td>
        </tr>
      </thead>
      <tbody>
      <tr>
      {
        this.state.filesArray.map((key,file)=>
        <td key={key}>{file.name}</td>)
      }
    </tr>
      </tbody>
    </Table>
    </div>
    )
  }
}

