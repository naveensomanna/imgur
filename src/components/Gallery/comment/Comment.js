import React from 'react';
import axios from 'axios';
import './comment.css';

export default class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			comment:[],
			load:false
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
	handleclick=(e)=>{
		e.preventDefault();
this.setState({
	load:!this.state.load
})
	}
	render(){
		var arr=[];
	
	for(var j=0;j<this.state.comment.length;j++){
if(this.state.comment[j].children.length){
 for(var i=0;i<this.state.comment[j].children.length;i++)
{
	arr.push({"author":this.state.comment[j].children[i].author,"platform":this.state.comment[j].children[i].platform,"points":this.state.comment[j].children[i].points,"comment":this.state.comment[j].children[i].comment});
}
}
}
var res1=arr.map((el,id)=>{
	return (
<div style={{marginLeft:'22px',paddingTop:'5px'}} key={id}>
<li className="comment_list">
<div className="author">
<span style={{fontWeight: '700',marginRight:'4px'}}>{el.author}</span><span>via<a href="">{el.platform}</a></span><span style={{marginLeft:'18px'}}>{el.points}pts</span>
</div>
<div>
{el.comment}
</div>
</li>
</div>
);
}
);
var res=this.state.comment.map(el=>{
	return (
<div>
<li className="comment_list">
<div className="author">
<span style={{fontWeight: '700',marginRight:'4px'}}>{el.author}</span><span>via<a href="">{el.platform}</a></span><span style={{marginLeft:'18px'}}>{el.points}pts</span>
</div>
<div>
{el.comment}
</div>
</li>
<a href="" onClick={this.handleclick}>{el.children.length>1?el.children.length +"replies":el.children.length+'reply'}</a>
{this.state.load?res1:null}
</div>

		)
});
console.log(res1);
		return(
<div>
<ul>{res}
</ul>
</div>
			);
	}
}
