import React from 'react';
import axios from 'axios';
export default class BackImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }
    componentDidMount() {

        axios.get(`https://api.imgur.com/3/image/${this.props.res}?client_id=5d692219f4e58cd`).then(response => {
            this.setState
                ({
                    img: response.data.data
                })
        })
    }

    render() {
        console.log(this.props.res);

        var r=[];
        r=this.state.img;
        console.log(this.state.img);
        return (
            <div>
            <img src={r.link} alt="" width="120px" height="130px"/>
            </div>
    
        )
        }
}