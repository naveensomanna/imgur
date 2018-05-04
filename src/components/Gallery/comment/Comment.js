import React from 'react';
import axios from 'axios';
import {Collapse,Well,Button} from 'react-bootstrap';
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
</div>
		)
});

		return(
<div>
<ul>{res}
<Example/>

</ul>
</div>
			);
	}
}

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
