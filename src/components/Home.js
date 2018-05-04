import React from 'react';
import Popular from './Gallery/popular/Popular';
import New from './Gallery/newest/Newest';
import Tags from './tag/Tags';
import Header from './Header/Header';
import '../index.css';
const img = 'https://s.imgur.com/desktop-assets/desktop-assets/bg-home-2.f1df058d8494e2f402781cc93a7f4003.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'popular'
        }
        this.handle = this.handle.bind(this);
    }
    handle(e) {
        e.preventDefault();
        this.setState({
            val: e.target.value
        })
    }
    render() {
        var arr=['The center of a donut is 100% fat free.','Never be bored again.','On the internet, nobody knows you"re a dog"'];
        var res=arr[Math.floor(arr.length* Math.random())];
        return (
            <div style={{ backgroundImage: `url(${img})`, height: '450px', backgroundSize: 'cover' }}>
                    <Header />
                <div className="random-title">
                {res}
                </div>
                <div>
                    <Tags/>

                </div>
                <div className="content-wrapper">
                <div className="content-inner">  
                    <div>
                <select style={{}}>
                        <option value="">MOST VIRAL</option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                <select onChange={this.handle} value={this.state.val}>
                        <option value="popular">POPULAR</option>
                        <option value="new" >NEWEST</option>
                    </select>
                </div>
                    
</div>
                    <div>
                    {this.state.val === 'popular' ? (<Popular />) : (<New />)}

                    </div>

                </div>
        </div>
        )
    }
}