
import React from 'react';
import axios from 'axios';
import BackImg from './BackImg ';
import TagLabel from './TagLabel';
export default class Feature extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taa:[],
        
        }
    }
    componentDidMount() {
        axios.get('https://api.imgur.com/3/tags?client_id=5d692219f4e58cd').then(response => {
            this.setState({
                taa: response.data.data.tags

            });
        })
    }
    render(){
        var res,ar=[],a={};
    ar=this.state.taa.slice(10,11);

res=ar.map((el,id)=>{
return(

<div className="tag tagsize" key={id} > 
        <div className="tags_inner">
            <div className="back_img_main">
                <BackImg res={el.background_hash}/>
            </div>
        
                <TagLabel name={el.name} total_items={el.total_items} accent={el.accent}/>
        </div>   
                </div>
)

})
return(
    <div>
{res}
</div>
);

    }

}