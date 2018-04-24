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

if(!this.state.img)
return null;
        var r=[];
        r=this.state.img;
        console.log(this.state.img);
        return(
            <div>
                         <img src={r.link} alt="" id="back_img" width="127px" height="20px"/> 

            </div>
        )   
        }
}