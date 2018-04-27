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
            this.setState({
                    popular: response.data.data
                })
        })
    }

    render() {
        let result = this.state.popular.map((el, id) => {

            return (
                <div className="grid_column" key={id}>
                        <a href="" id="grid_inner" >
                            <div className="post_item_media">
                                <img src={el.images ? el.images[0].link : null} ref={img=>this.img=img} onError={()=>this.img.src="http://i.imgur.com/lL3LtFD.jpg"} alt=" " height="250px" width="260px" />
                            </div>
                            <div id="post-item-title_wrap">
                                <div className="post_title">
                                    <p>{el.title}</p>
                                </div>
                                <div className="post_ups_dws">
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-long-arrow-alt-up"></i>{el.ups}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-long-arrow-alt-down"></i>{el.downs}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-comment-alt"></i>{el.comment_count}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-eye"></i>{el.views}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
            )
        })
        return (
            <div className="home_grid">
                {result}
            
            </div>
        )
    }
}

