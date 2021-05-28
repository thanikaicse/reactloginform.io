import React, { Component } from "react"
import reactDOM from "react-dom"
import { render } from "react-dom";

//Login Box
export default class Loginform extends Component {

    constructor(props) {
      const user= props;
      
      super(props);
      this.state = {
        username:'',
        password:'',
        hobby:props.hobby,
      };
    }
  
    submitLogin(e) {
      document.getElementById("root").innerHTML="";
          console.log("test for call initialize");
          console.log("Username:"+this.state.username+"Password:"+this.state.password);

          const un1=user.map(use=>use.username);
          const pw1=user.map(use=>use.password);
          const hb1=user.map(use=>use.hobby);

          let un=this.state.username;


        for (const un in un1) {
          console.log("Match found"+un+un1);
        }

          if(un in un1.slice())
          {

            console.log("Match found")
          }

          
          let pw=this.state.password;
          let hb=this.state.hobby;

          for(let k=0;k<un1.length;k++){
            console.log("username"+un1[k]);
          }


          if(un ==="raj" && pw==="raj"){
            console.log("your hobby is "+" Reading");
            document.getElementById("root").innerHTML="Raj hobby is Reading";
            
          }else if(un==="thanikai" && pw==="thanikai"){
            console.log("your hobby is "+" Writing");
            document.getElementById("root").innerHTML="Thanikai hobby is Writing";
            
          }else if(un==="ravi" && pw==="ravi"){
            console.log("your hobby is "+" Listening");
            document.getElementById("root").innerHTML="Ravi hobby is Listening";
            
          }else if(un==="sachin" && pw==="sachin"){
            console.log("your hobby is "+" Cycling");
            document.getElementById("root").innerHTML="Sachin hobby is Cycling";
            
          }else if(un==="dhoni" && pw==="dhoni"){
            console.log("your hobby is "+" Coding");
            document.getElementById("root").innerHTML="Dhoni hobby is Coding";
            
          }else{
            console.log("dont fix hobby state");
          }
        } 
    
    getusername=(i)=>{
        this.setState({username: i.target.value})
    }
    getpassword=(j)=>{
      this.setState({password: j.target.value})
    }
    render() {

      return (
          <form>
        <div className="">
                <h1>Login form design</h1><br></br>
                User name:<input type="text" name="text1" placeholder="Enter username" onChange={this.getusername}/><br></br>
                Password:<input type="password" name="text2" placeholder="Enter password" onChange={this.getpassword}/><br></br>
                <button type="button" className="" onClick={this.submitLogin.bind(this)}>Login</button><br></br>
        </div>
        </form>
        
      );
    }
  
  }

const user=[
  {username:"raj",password:"raj",hobby:"Reading"},
  {username:"ravi",password:"ravi",hobby:"Writing"},
  {username:"thanikai",password:"thanikai",hobby:"Listening"},
  {username:"sachin",password:"sachin",hobby:"Cycling"},
  {username:"dhoni",password:"dhoni",hobby:"coding"} ];
reactDOM.render(<Loginform user={user}/>,document.getElementById("root"));
