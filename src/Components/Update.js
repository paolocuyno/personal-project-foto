import React, {useState} from 'react';
import axios from 'axios'

function Update(props) {
    const [title,setTitle]=useState('')
    function submitClick(){
        axios.put('/api/title',{id:props.match.params.id,title:title})
        .then(res=>{
            console.log('this is working')
            props.history.push("/dash")
        })
    }
    
    
    return (
        <div>
            <input onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={()=>submitClick()}>Submit</button>
        </div>
    );
}

export default Update;