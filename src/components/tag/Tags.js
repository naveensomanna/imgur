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

        let result = this.state.tags.slice(0, 7).map((el, id) => {

            return (
                <div className="tag" key={id}>
        
                   <div className="tags_inner">
                        <div className="back_img_main">
                            <BackImg res={el.background_hash} />
                        </div>

                            <TagLabel name={el.name} total_items={el.total_items} accent={el.accent}/>
                    </div>
                </div>

            );
        })
        let result1 = this.state.tags.slice(8, 14).map((el, id) => {
            return (
                <div href="" className="tag" >
                    <div className="tags_inner">
                        <div className="back_img_main">
                            <BackImg res={el.background_hash} />
                        </div>
                                                    <TagLabel name={el.name} total_items={el.total_items} accent={el.accent}/>

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



class TagLabel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

return(
<div className="tag_label" style={{backgroundColor:`#${this.props.accent}`}}>
<div className="tag_name">{this.props.name}</div>
                            <div className="tag_post">{this.props.total_items}<span style={{ marginLeft: '2px' }}>Posts</span></div>
</div>
)

    }
}