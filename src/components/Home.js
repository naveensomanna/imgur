import React from 'react';
import Popular from './Gallery/popular/Popular';
import New from './Gallery/newest/Newest';
import Tags from './tag/Tags';
import Header from './Header/Header';

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
        var arr=['The center of a donut is 100% fat free.','On the internet, nobody knows you"re a dog"'];
        var res=arr[Math.floor(arr.length* Math.random())];
        return (
            <div style={{ backgroundImage: `url(${img})`, height: '450px', backgroundSize: 'cover' }}>
                    <Header />
                <div style={{ textAlign: 'center', marginTop: '12px', minHeight: '34px', color: '#aed8ea', letterSpacing: '.6px', fontSize: '20px', fontWeight: '600' }}>{res}</div>
                <div>
                    <Tags/>

                </div>
                <div style={{ position: 'relative', top: '50px',width:'1212px',margin:'0 auto' }}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>               
                    <div>
                <select style={{border:'none',background:'none',color:'transparent',textShadow:'0 0 0 #babec2',fontWeight:'600',cursor:'pointer',outline:'none'}}>
                        <option value="">MOST VIRAL</option>
                        <option value="" ></option>
                    </select>
                </div>
                <div>
                <select onChange={this.handle} value={this.state.val} style={{border:'none',background:'none',color:'transparent',textShadow:'0 0 0 #babec2',fontWeight:'600',cursor:'pointer'}}>
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