import React, { useState, useRef } from 'react';
import { Graph } from 'react-d3-graph';
import Modal from '../Modal/Modal'
import Birds from './Birds'

import './animals.css'



function Animals(props) {

const [showModal, setShowModal] = useState(false);
const [modalData, setModalData] = useState({name:""});
const [connect, setConnect] = useState("");
const [detail, setDetail] = useState("");

 
const createNodes = (data) => {
    const output = [];
    for(const subject in data) {
        const node = { id: data[subject].name , svg: data[subject].svg ? data[subject].svg : "none" };
        if(data[subject].name === "Water"
            ||data[subject].name === "Woodlands"
            ||data[subject].name === "Cities"){
                node.size = { height:450, width:450 };
                node.renderLabel = false;
            };
        output.push(node);
    }
    return output;
}

const createLinks = (data) => {
    const output = [];
    for(const subject in data) {
        if(data[subject].connection) {
            for(const link in data[subject].connection){
                const linkNode = { source: subject, target: link};
                output.push(linkNode)
            }
        }
    }
    return output;
};

const data = {
    nodes: createNodes(Birds),
    links: createLinks(Birds),
};
 
const myConfig = {
    nodeHighlightBehavior: true,
    staticGraph: false,
    height: 500,
    d3: {
        gravity: -350,
    },
    node: {
      color: "#F07900",
      size: 300,
      fontSize: 12,
      highlightFontSize: 12,
      highlightStrokeColor: "black",
    },
    link: {
      highlightColor: "rgb(123, 233, 123)",
      strokeWidth: 3.5,
      semanticStrokeWidth: true
    },
  }
 
// graph event callbacks
const onClickGraph = function() {
    window.alert(`Clicked the graph background`);
};
 
const onClickNode = function(nodeId) {
    //console.log("hey!") 
    setConnect("");
    setModalData(Birds[`${nodeId}`]);
    setShowModal(true);
};
 
const onDoubleClickNode = function(nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};
 
const onRightClickNode = function(event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};
 
const onMouseOverNode = function(nodeId) {
    //window.alert(`Mouse over node ${nodeId}`);
    //setModalData(test[`${nodeId}`])
    //setShowModal(true);
};
 
const onMouseOutNode = function(nodeId) {
    //window.alert(`Mouse out node ${nodeId}`);
    //(false);
};
 
const onClickLink = function(source, target) {
    //window.alert(`Clicked link between ${source} and ${target}`);
    //console.log("hey!") 
    setModalData(Birds[`${source}`]);
    setConnect(Birds[`${target}`])
    setDetail(Birds[`${source}`].connection[target].detail)
    setShowModal(true);
};
 
const onRightClickLink = function(event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};
 
const onMouseOverLink = function(source, target) {
   // window.alert(`Mouse over in link between ${source} and ${target}`);
};
 
const onMouseOutLink = function(source, target) {
    //window.alert(`Mouse out link between ${source} and ${target}`);
};
 
const onNodePositionChange = function(nodeId, x, y) {
   // window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};
    return (
        <>
    <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onDoubleClickNode={onDoubleClickNode}
    onRightClickNode={onRightClickNode}
    onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    onRightClickLink={onRightClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
    onNodePositionChange={onNodePositionChange}
/>
<Modal show={showModal} data={modalData} close={setShowModal} connect={connect} detail={detail}/>
</>
)
};

export default Animals;