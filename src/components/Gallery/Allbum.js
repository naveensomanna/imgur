import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import './allbum.css';
export default class Allbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allbum: []
        }
    }
             componentDidMount(){

let clientId = "5d692219f4e58cd";
axios({
    method: 'get',
    url: `https://api.imgur.com/3/album/${this.props.match.params.id}`,
    headers: { 'authorization': 'Client-ID ' + clientId }
}).then(response => {
    this.setState({
        allbum:response.data.data
    });
}).catch(function(error) {
    console.log(error);
});
    }
    render() {
      var arr=[];
      var res;
      if(this.state.allbum.images){
        for (var i=0;i<this.state.allbum.images.length;i++){
arr.push(this.state.allbum.images[i].link);
        }
        }

       res= arr.map(el=>{
            return(
                <div className="allbum_img">
<img src={el}  style={{objectPosition:'80% 20%',objectFit:'cover'}}/>             
</div>
)
        });
        return(
            <div>
            <div className="allbum_main">
            <div className="allbum_header">
            <p>{this.state.allbum.title}</p>
            </div>
  <div className="allbum_block">
    {res}
    </div>
<div className="allbum_footer">

</div>
<div className="new_comment">
<textarea placeholder="Write a comment" id="textarea"></textarea>
</div>

<div className="comment_details_main">
<Comment id={this.props.match.params.id}/>
</div>

    </div>
            </div>
        )

    }
}