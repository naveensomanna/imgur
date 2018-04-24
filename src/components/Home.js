import React from 'react';
import Popular from './Popular/Popular';
import New from './New/New';
import { Route, NavLink } from 'react-router-dom';
import Tags from './tag/Tags';
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
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '12px', minHeight: '34px', color: '#aed8ea', letterSpacing: '.6px', fontSize: '20px', fontWeight: '600' }}>On the internet, nobody knows you're a dog</div>
                <div>
                    <Tags />

                </div>
                <div style={{ position: 'relative', top: '50px' }}>
                    <select onChange={this.handle} value={this.state.val}>
                        <option value="popular">popular</option>
                        <option value="new" >newest</option>
                    </select>
                    {this.state.val === 'popular' ? (<Popular />) : (<New />)}

                    <div>

                    </div>

                </div>

            </div>
        )
    }
}