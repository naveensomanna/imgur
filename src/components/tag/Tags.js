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
            status: false,
            loaded: false,
            val: "MORE TAGS+"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                tags: response.data.data.tags,
                loaded: true

            });
        })
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({
            status: !this.state.status,
        });

    }
    render() {
        let result = this.state.tags.slice(0, 8).map((el, id) => {

            return (
                <div className="tag" key={id}>
        
                   <div className="tags_inner">
                        <div className="back_img_main">
                            <BackImg res={el.background_hash} />
                        </div>

                        <div className="tag_label">
                            <div className="tag_name">{el.name}</div>
                            <div className="tag_post">{el.total_items}<span style={{ marginLeft: '2px' }}>Posts</span></div>
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
                            <div className="tag_name"><span>{el.name}</span></div>
                            <div className="tag_post"><span>{el.total_items}</span><span>Posts</span></div>
                        </div>
                    </div>
                </div>
            );
        })
        var options = {
            color: "orange"
        }
        return (
            <div className="trending">
                <div className="trendingtags-header">
                    <div className="trendingtags_label">
                        <h3>Explore Tags</h3>
                    </div>
                    <div className="label_toggle">
                       <h3><a href="" onClick={this.handleClick} ref={(node) => { this.myref = node }}>{!this.state.status ? this.state.val : "LESS TAGS -"}</a></h3>
                    </div>
                </div>
                <Loader loaded={this.state.loaded} options={options}>
                    <div className="trending_tags_container">

                        {result}
                        {this.state.status ? result1 : null}
                    </div>

                </Loader>
            </div>
        )
    }
}



