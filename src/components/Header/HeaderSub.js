import React from 'react';
import {NavLink} from 'react-router-dom'
import './headersub.css';
import axios from 'axios';
export default class HeaderSub extends React.Component{
constructor(props){
	super(props);
		this.state={
			click:false,
			account:[]
		}
	}
	click=(e)=>{
		e.preventDefault();
		this.setState({
			click:!this.state.click
		});
	}
	componentDidMount(){
		let clientId = "5d692219f4e58cd";
axios({
    method: 'get',
    url: 'https://api.imgur.com/3/account/Naveensomanna',
    headers: { 'authorization': 'Client-ID ' + clientId }
}).then(response => {
    this.setState({
        account:response.data.data
    });
}).catch(function(error) {
    console.log(error);
});
	}
	render()
	{

		return(

<div className="main_head">
<div className="inner_blog">
<div className="logo_head">
                   <div className="logo_main">
                   <NavLink to="/"><img src="https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg" alt="" /></NavLink><a href="" onClick={this.click} className="dropbtn"><i className="fas fa-caret-down"></i></a></div>
<div className="btn_newpost">
                        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg" alt="" />
                <span>New post</span>        
</div>
                   <div className="">

                   </div>

</div>
<div className="right_head">
<div>
<i className="fas fa-search"></i>
<i className="fas fa-comment"></i>
<i className="far fa-bell"></i>
</div>
<div id="url">
<a href="">{this.state.account.url}</a>
<span id="account"><HoverOnAccount/></span>
</div>
</div>
</div>
<div style={{position:'fixed',left:'120px',zIndex:'1'}}>{this.state.click?<Content/>:null}</div>
<div id="account" style={{position:'fixed',right:'250px',zIndex:'1',color:'#fff'}}></div>

</div>
			);
	}
}

const Content =() =>{
return(
<div className="drop_down">

<a href="">we're hiring</a>
<a href="">blog</a>

<a href="">about imgur</a>
<a href="">imgur store</a>
<a href="">imgur apps</a>
<a href="">developer api</a>
<a href="">advertise</a>
<a href="">need help</a>

</div>
		);
}
class HoverOnAccount extends React.Component{
	render(){
    return (

<div className="dropurl">
<li><NavLink exact to="/user/all" style={{color:'#121211'}}>images</NavLink></li>
<li>allbums</li>
<li><NavLink exact to="/user/Naveensomanna" style={{color:'#121211'}}>gallery profile</NavLink></li>
<li>favorites</li>
<li>messages</li>
<li><a className="a">settings</a><a className="a">sign out</a></li>
</div>

    )
}
}