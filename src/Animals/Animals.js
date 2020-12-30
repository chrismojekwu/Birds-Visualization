import React, { useState, useRef } from "react";
import { Graph } from "react-d3-graph";
import Modal from "../Modal/Modal";
import Birds from "./Birds";

import "./animals.css";

function Animals(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ name: "" });
  const [connect, setConnect] = useState("");
  const [detail, setDetail] = useState("");

  const createNodes = (data) => {
    const output = [];
    for (const subject in data) {
      const node = {
        id: data[subject].name,
        svg: data[subject].svg ? data[subject].svg : "none",
      };
      if (
        data[subject].name === "Water" ||
        data[subject].name === "Woodlands" ||
        data[subject].name === "Cities"
      ) {
        node.size = { height: 450, width: 450 };
        node.renderLabel = false;
      }
      output.push(node);
    }
    return output;
  };

  const createLinks = (data) => {
    const output = [];
    for (const subject in data) {
      if (data[subject].connection) {
        for (const link in data[subject].connection) {
          const linkNode = { source: subject, target: link };
          output.push(linkNode);
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
      semanticStrokeWidth: true,
    },
  };

  const onClickNode = function (nodeId) {
    setConnect("");
    setModalData(Birds[`${nodeId}`]);
    setShowModal(true);
  };

  const onClickLink = function (source, target) {
    setModalData(Birds[`${source}`]);
    setConnect(Birds[`${target}`]);
    setDetail(Birds[`${source}`].connection[target].detail);
    setShowModal(true);
  };

  return (
    <>
      <Graph
        id="graph-id"
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
      <Modal
        show={showModal}
        data={modalData}
        close={setShowModal}
        connect={connect}
        detail={detail}
      />
    </>
  );
}

export default Animals;
