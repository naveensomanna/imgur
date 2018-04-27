import React from 'react';
import axios from 'axios';
import './comment.css';

export default class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			comment:[]
		}
	}
	componentDidMount(){
		let clientId = "5d692219f4e58cd";
axios({
    method: 'get',
    url: `https://api.imgur.com/3/gallery/${this.props.id}/comments`,
    headers: { 'authorization': 'Client-ID ' + clientId }
}).then(response => {
    this.setState({
        comment:response.data.data
    });
}).catch(function(error) {
    console.log(error);
});
	}
	render(){
var res=this.state.comment.map(el=>{
	return (

<li className="comment_list">
<div>
<span>{el.author}</span><span>{el.platform}</span><span>{el.points}</span>
</div>
<div>
{el.comment}
</div>
</li>

		)
})

		return(
<div>
<ul>{res}</ul>
</div>
			);
	}
}
