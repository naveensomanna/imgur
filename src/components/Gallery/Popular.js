import React from 'react';
import axios from 'axios';
import './popular.css';
import {Link} from 'react-router-dom';
import Loader from 'react-loader';

const url = 'https://api.imgur.com/3/gallery/hot/viral?showViral=true&album_previews=true&client_id=5d692219f4e58cd';
export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popular: [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                    popular: response.data.data,
                    loaded: true
                });
        })
    }

    render() {
        var options = {
            color: "orange"
        }

            var result = this.state.popular.map((el, id) => {
                
                return (
                    <div className="grid_column" key={id}>
                      <Link to={`/gallery/${el.id}`}> 
                       <a href="" id="grid_inner" >
                            <div className="post_item_media">
                                <img src={el.images ? el.images[0].link : null} ref={img=>this.img=img}  alt=" " height="250px" width="260px" />
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
                        </Link>
                    </div>
                )
            
           
            });
        

        return (
            <div className="home_grid">
                <Loader loaded={this.state.loaded} options={options}>
                    {result}
                </Loader>
            </div>
        )
    }
}

