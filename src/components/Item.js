import React from 'react'

export default function Item({name,company,avatar_url}) {
    return (
        <div style={{border: "1px solid black", width: "300px", display: "flex",margin: "5px", padding: "5px"}}>
           
            <img 
                src={avatar_url}
                alt={name}
                width="100"
                height="100"
                style={{margin:"5px",borderRadius:"5px"}}/>
            
            <div >
                <h4>{name}</h4>
                <p>{company}</p>
            </div>
        </div>
    )
}
