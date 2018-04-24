import React from 'react';
import axios from 'axios';
import BackImg from './BackImg ';
import './tag.css'
const url = 'https://api.imgur.com/3/tags?client_id=5d692219f4e58cd';
export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            status:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.myRef=React.createRef();
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState
                ({
                    tags: response.data.data.tags
                })
        })
    }
handleClick=(e)=>{
e.preventDefault();
this.setState({
    status:!this.state.status
})
this.myref.value="";
}
    render() {
        let result = this.state.tags.slice(0, 8).map((el, id) => {
            return (
                <div>
                    <a href="" className="tag" >
                        <BackImg res={el.background_hash} />
                        <div>
                            <div>{el.name}</div>
                            <div>{el.total_items}</div>
                        </div>
                    </a>
                </div>
            );
        })
        let result1 = this.state.tags.slice(7, 15).map((el, id) => {
            return (
                <div>
                    <a href="" className="tag" >
                        <BackImg res={el.background_hash} />
                        <div>
                            <div>{el.name}</div>
                            <div>{el.total_items}</div>
                        </div>
                    </a>
                </div>
            );
        })
        return (
            <div className="trending">
                <div className="trendingtags-header">
                    <div className="trendingtags_label">
                        <span>Explore Tags</span>
                    </div>
                    <div className="label_toggle">
                        <a href="" onClick={this.handleClick} ref={(e)=>this.myref=e}>MORE TAGS</a>
                    </div>
                </div>
                <div className="trending_tags_container">
                    {result}
                    {this.state.status?result1:null}
                </div>
            </div>
        )
    }
}



