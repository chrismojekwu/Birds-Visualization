import { randomExponential } from 'd3';
import React, { useState } from 'react';
import './modal.css'

function Modal(props){
    const [offset, setOffset] = useState("150px");

    const renderConnection = () => {
       return props.connect.image.toString().includes("/") === true 
        ? <img src={props.connect.image} alt={props.connect.name} className="modal-img"/> 
        : <div className="target" style={{backgroundColor: props.connect.image}}></div> ;                   
    };
    
    const listConnections = (connection) => {
        const output = [];
        for (const property in connection) {
            output.push(`${property}`)
        };
        return output.map((name,index) => {
            return <span key={index}>{name}<br/></span>
        })
    };

    const renderData = () => {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="connect-imgs">
                        
                        { props.data.image.toString().includes("/") === true 
                        ? <img src={props.data.image} alt={props.data.name} className="modal-img"/> 
                        : <div className="source" style={{backgroundColor: props.data.image}}></div> }
                                          
                        {props.connect === "" ? "" 
                        : <div className="connect-line skinny" onMouseEnter={() => setOffset("-20px")}
                        onMouseLeave={() => setOffset("150px")}><div class="hover">Hover for Details</div></div>}
                        
                        {props.connect === "" ? "" : renderConnection()}
                    </div>
                    <div className="list">
                    {props.data.connection && props.connect === "" 
                        ?   <div className="connect-list">
                                <h3>Connections:</h3>
                                {listConnections(props.data.connection)}
                            </div> : ""}  
                    </div>
                    <div className="names">
                        {props.connect === "" ? "" : <span>{props.data.name}</span> }  
                        {props.connect === "" ? "" : <div> {props.connect.name} </div>}                   
                    </div>

                    <div className="general-info">
                    {props.connect === "" && props.data.info ? props.data.info : ""}
                    </div>

                    <br/>
                    <div className="detail" style={{ top: offset}}>
                        {props.connect === "" ? "" : props.detail}
                    </div>
                    <button id="close" onClick={() => props.close(false)}>Close</button>
                </div>
            </div>
        );
    };

return props.show === false ? ""
: renderData();
}

export default Modal;