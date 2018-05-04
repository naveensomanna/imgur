import React from 'react'
import HeaderSub from '../Header/HeaderSub.js';
import {Route} from 'react-router-dom';
import GalleryComponents from './Galleryprofile/GalleryComponents.js';
import './user.css';
export default class User extends React.Component{

render(){
	return(
<div>
<HeaderSub/>
<div id="two_columns">
<Route exact path="/user" component={GalleryComponents}></Route>

</div>
</div>
		)
}

}