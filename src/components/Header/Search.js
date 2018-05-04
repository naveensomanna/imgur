import React from 'react';
import './search.css';
export default class Search extends React.Component {
    
   
    render() {
        return (
<div>
 <form id="search_form">
                            <input type="text" placeholder="Images, #tags, @users oh my!" id="search"/>
                        </form>
</div>
        	)
    }
}