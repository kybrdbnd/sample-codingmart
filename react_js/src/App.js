import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Myform extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      tableData: [],
      updateIndex: -1,
      editing:false,
      del: true,
    }
    this.saveData = this.saveData.bind(this);
    this.update = this.update.bind(this);
    this.editData = this.editData.bind(this);
    this.delData = this.delData.bind(this);
    this.cancelbtn = this.cancelbtn.bind(this);
    this.updatebtn = this.updatebtn.bind(this);
  }
  saveData(e){
    var tablerow = this.state.tableData;
    tablerow.push({firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email});
    this.setState({tableData:tablerow});
    // console.log(this.state.tableData);
    this.setState({firstname:""});
    this.setState({lastname:""});
    this.setState({email:""});
    e.preventDefault(false);
  }
  update(e){
    this.setState({ [e.target.name] :e.target.value});
    e.preventDefault();
    // console.log(e.target.value)
  }
  editData(indx){
    this.setState({updateIndex:indx});
    this.setState({editing:true});
    this.setState({firstname:this.state.tableData[indx].firstname});
    this.setState({lastname:this.state.tableData[indx].lastname});
    this.setState({email:this.state.tableData[indx].email});
    // console.log(this.state.updateIndex, indx);
    console.log(this.state.editing);
  
  }
  delData(indx){
    // console.log('delete');
    // var temp = this.state.firstname;
    // console.log(temp);
    this.state.tableData.splice(indx,1);
    this.setState({tableData:this.state.tableData});
    this.setState({firstname:""});
    this.setState({lastname:""});
    this.setState({email:""});
    this.setState({editing:false});
  }
  updatebtn(){
    this.setState({editing:false});
    var newIndex=this.state.updateIndex;
    // console.log(newIndex);
    this.state.tableData[newIndex].firstname = this.state.firstname;
    this.state.tableData[newIndex].lastname = this.state.lastname;
    this.state.tableData[newIndex].email = this.state.email;
    this.setState({firstname:""});
    this.setState({lastname:""});
    this.setState({email:""});
    console.log(this.state.tableData);

  }
  cancelbtn(){
    this.setState({editing:false});
    this.setState({firstname:""});
    this.setState({lastname:""});
    this.setState({email:""});
  }

  render() {
      if(this.state.editing){
        var btnChange = <div> <button onClick={this.updatebtn}>Update</button>
        <button onClick={this.cancelbtn}>Cancel</button>
        </div>
      }
       else{
        var btnChange = <input type="submit" value="Submit" /> ;
       }
    return (
     <div>
          <form onSubmit={this.saveData}>
              <label>FirstName:
              </label>
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.update}/>
              <br/>
              <label>LastName:
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.update}/>
              </label>
              <br/>
              <label>Email:
              <input type="text" name="email" value={this.state.email} onChange={this.update}/>
              </label>
              <br/>
              {btnChange}
          </form>
          <div>
            <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
             { 
               this.state.tableData.map(function(tableRow, index) {
                  return (
                    <tr key={'row' + index} id={index}>
                      <td>{tableRow.firstname}</td>   
                      <td>{tableRow.lastname}</td>
                      <td>{tableRow.email}</td>
                      <td><button onClick={()=>this.editData(index)}>Edit</button></td>
                      <td><button onClick={()=>this.delData(index)}>Delete</button> </td> 
                    </tr>
                    );
                },this)            
              }
              </tbody>
            </table>
          </div>
     </div>
    );
  }
}

export default Myform;
