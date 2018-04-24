import React from 'react';
import axios from 'axios';
import BackImg from './BackImg ';
import './tag.css';
import Loader from 'react-loader';

const url = 'https://api.imgur.com/3/tags?client_id=5d692219f4e58cd';
export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            status:false,
            loaded:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState
                ({
                    tags: response.data.data.tags,
                    loaded:true

                })
        })
    }
handleClick(e){
e.preventDefault();
this.setState({
    status:!this.state.status
});
}
    render() {
        if(!this.state.tags.length)
        return null;
        let result = this.state.tags.slice(0, 8).map((el, id) => {
            return (
                    <div  className="tag" >
                    <div className="tags_inner">
                    <div className="back_img_main">                       
                         <BackImg res={el.background_hash} />
                    </div>

                        <div className="tag_label">
                            <div>{el.name}</div>
                            <div>{el.total_items}</div>
                        </div>
                        </div>
                    </div>
                
            );
        })
        let result1 = this.state.tags.slice(7, 15).map((el, id) => {
            return (
                <div href="" className="tag" >
                <div className="tags_inner">
                <div className="back_img_main">                       
                     <BackImg res={el.background_hash} />
                </div>

                    <div className="tag_label">
                        <div>{el.name}</div>
                        <div>{el.total_items}</div>
                    </div>
                    </div>
                </div>
            );
        })
        var options={
            color:"orange"
                    }
        return (
            <div className="trending">
                <div className="trendingtags-header">
                    <div className="trendingtags_label">
                        <span>Explore Tags</span>
                    </div>
                    <div className="label_toggle">
                        <a href="" onClick={this.handleClick} ref={(node)=>{this.myref=node}}>MORE TAGS</a>
                    </div>
                </div>
                <Loader loaded={this.state.loaded} options={options}>
                <div className="trending_tags_container">

                    {this.state && this.state.tags && result}
                    {this.state.status?result1:null}
                    </div>

                    </Loader>
            </div>
        )
    }
}



