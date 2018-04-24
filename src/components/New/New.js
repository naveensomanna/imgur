import React from 'react';
import axios from 'axios';
const url = 'https://api.imgur.com/3/gallery/hot/time/0?showViral=true&album_previews=true&client_id=5d692219f4e58cd';
export default class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popular: []
        }
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState
                ({
                    popular: response.data.data
                })
        })
    }

    render() {
        let result = this.state.popular.map((el, id) => {

            return (
                <li key={id} style={{ listStyleType: 'none' }}><img src={el.images ? el.images[0].link : null} width="250px" height="200px" /></li>
            )
        })
        return (
            <div>
                <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '1130px', margin: '0 auto' }}>{result}
                </ul>
            </div>
        )
    }
}

