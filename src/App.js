import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dropzone from 'react-dropzone';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filesArray:[]
    }
  }
  fileHandle = (file) => {
    file.map((files)=>{
      return(
      this.setState({
        filesArray:this.state.filesArray.concat(files)
      }))
    })
    console.log(this.state.filesArray)
  }
  delete = (file,e) => {
    e.preventDefault();
    let filteredArray = this.state.filesArray.filter(item => item !== file)
    this.setState({
      filesArray: filteredArray
    })
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
        <section align='center' style={{paddingLeft:'60px'}}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p align='center'>Drag 'n' drop some files here, or click to select files</p>
            <button style={{color:'green'}} type="button" onClick={open}>
              Open File Dialog
        </button>
          </div>
        </section>
      )}
    </Dropzone>
    </div>
    <br/>
    <br/>
    <TableContainer component={Paper} style={{width:'700px',display:'inline-block'}}>
      <Table stickyHeader aria-label="simple table" size="small">
        <TableHead>
          <TableRow >
            <TableCell style={{fontWeight:'bold'}}>File Name</TableCell>
            <TableCell style={{fontWeight:'bold'}}>File Size</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          this.state.filesArray.map((file)=>{
            return(
              <TableRow>
            <TableCell>{file.name}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>
            <span onClick={(event)=>this.delete(file,event)}><DeleteIcon style={{marginRight:'20px',color:'red',cursor:'pointer'}}
            ></DeleteIcon > </span>
            <a href={file} target="_blank" rel="noopener noreferrer" download="file.pdf">
             <GetAppIcon style={{color:'blue',cursor:'pointer'}}
             ></GetAppIcon>
             </a></TableCell>
            </TableRow>
            )
          }
          )
        }
      </TableBody>
    </Table>
    </TableContainer>
    </div>
    )
  }
}

