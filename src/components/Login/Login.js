import React from 'react';
import'./login.css';
import {NavLink,withRouter} from'react-router-dom';
 class Login extends React.Component{
   constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
   }
handleSubmit=(e)=>{
  e.preventDefault();
 if( this.a.value==='naveen' && this.pass.value==='imgur'){
  this.props.history.push('/home');
}else{
  alert("enter valid username and password");
}
}
render(){
return(
<div className="login-screen">
  <div className="left-item">
    <div className="login-panel">
      <div className="inner-login-panel">
        <div className="content-panel">
          <h3 className="title">Sign In</h3>
          <form>
            <input type="text" placeholder="username" ref={(text)=>{this.a=text}}/>
            <input type="password" placeholder="password" ref={(pass)=>{this.pass=pass}}/>
            <button type="button" value="Let's Go" onClick={this.handleSubmit}>Let's Go</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="right-item">
    <div class="slider-panel">
      <div class="inner-slider-panel">
        <h1>Logo</h1>
        <p>Sign in to acess your account.</p>
      </div>
    </div>
  </div>
</div>

)
}

}
export default withRouter(Login);