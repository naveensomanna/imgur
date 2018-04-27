import React from 'react';
import PropTypes from 'prop-types';
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
            this.setState({
                    img: response.data.data
                })
        })
    }

    render() {
       
        return(
            <div>
                         <img src={this.state.img.link} alt="" id="back_img" width="127px" height="20px"/> 

            </div>
        )   
        }
}

BackImg.propTypes={
    res:PropTypes.string.isRequired
}