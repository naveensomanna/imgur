
import React from 'react';
import axios from 'axios';
import './account.css';

export default class Account extends React.Component{
constructor(props){
	super(props);
	this.state={
		account:[],
		show:false
	}
}
componentDidMount() {
        let clientId = "5d692219f4e58cd";
        axios({
            method: 'get',
            url: 'https://api.imgur.com/3/account/Naveensomanna',
            headers: {
                'authorization': 'Client-ID ' + clientId
            }
        }).then(response => {
            this.setState({
                account: response.data.data
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    handleClick=(e)=>{
e.preventDefault();
this.setState({
	show:!this.state.show
})
    }
	render(){

		return(
<div id="avatar">
<a href="" onClick={this.handleClick} style={{display:'block',position:'relative'}}><img src={this.state.account.avatar} alt=" "/></a>
<div>{this.state.show?<Settings/>:null}</div>
</div>
			)
	}
}

const Settings=()=>{
return(
<div id="setting_main">
<ul>
<li><a href="">Posts</a></li>
<li><a href="">Favorites</a></li>
<li><a href="">Comments</a></li>
<li><a href="">About</a></li>
<li><a href="">Images</a></li>
<li><a href="">Albums</a></li>
<li><a href="">Settings</a></li>
<li><a href="">Sign Out</a></li>
</ul>
</div>

)

}