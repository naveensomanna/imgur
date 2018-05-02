import React from 'react';
import axios from 'axios';
import Comment from '../comment/Comment';
import PopularSub from '../popularsub/PopularSub.js';
import HeaderSub from '../../Header/HeaderSub';
import './allbum.css';
export default class Allbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allbum: []
        }
    }
    componentDidMount() {
        let clientId = "5d692219f4e58cd";
        axios({
            method: 'get',
            url: `https://api.imgur.com/3/album/${this.props.match.params.id}`,
            headers: {
                'authorization': 'Client-ID ' + clientId
            }
        }).then(response => {
            this.setState({
                allbum: response.data.data
            });
        }).catch(function(error) {
            console.log(error);
        });
    }
    render() {
        var arr = [];
        var desc=[]
        var res;
        if (this.state.allbum.images) {
            for (var i = 0; i < this.state.allbum.images.length; i++) {
                arr.push({"link":this.state.allbum.images[i].link,"des":this.state.allbum.images[i].description});
            }
        }

        res = arr.map((el,id) => {
            return (
                <div key={id}>
             <div className = "post_image">
                <img src={el.link}
                style = {{objectPosition: '80% 20%',objectFit: 'cover'}} alt = "" / >
                </div>
                           <div className="post_img_meta"> 
                           <p>{el.des}</p>
                           </div>
</div>
            )   
        });
        return ( 
        <div>
            <HeaderSub/>
<div className="wrapper">
            <div className = "post_container" >

            <div className ="post_header">

            <div className="title_post_container">
           <div className="title1">
             {this.state.allbum.title} 
            </div>
            

            <p>by{this.state.allbum.account_url}</p> 
            <p>{this.state.allbum.platform} </p> 
            </div>
<div className="next_post">
<div className="prev">

</div>
<a href="" className="next">Next Post</a>
<span></span>
</div>
</div>
            <div className="post_images"> 
            {res} 
            </div>  

            <div className="poster_action">
<div className="poster_inner">
<div>
<span><i className="fas fa-long-arrow-alt-up"></i></span>
<span><i className="fas fa-long-arrow-alt-down"></i></span>
<span><i className="fas fa-heart"></i></span>

</div>
<div>
<i className="fab fa-facebook-square"></i>
<i  className="fab fa-twitter-square"></i>
<i  className="fab fa-pinterest-square"></i>
<i className="fab fa-reddit-square"></i>
</div>
</div>
<div>{this.state.allbum.points}</div>
<div>{this.state.allbum.views} views</div>

        </div>
            <div id="new_comment">
            <form>
            <input type="text" placeholder="write a comment" id="textarea"/>  
            </form>
            </div>

            <div className = "comment_details_main">
<Comment id={this.props.match.params.id}/> 
            </div>
            </div> 
            <div>
                                     <PopularSub/>
                                     </div>
</div>
             </div>

        )

    }
}

