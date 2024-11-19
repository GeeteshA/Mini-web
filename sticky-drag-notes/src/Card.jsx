import React from "react";
import "./App.css";
import Draggable from "react-draggable";

const StickyCard = ({ id, title, details, onDelete, onDrag }) => {
  const handleStop = (e, data) => {
    onDrag(id, data.x, data.y);
  };

  return (
    <Draggable onStop={handleStop}>
      <div className="note-card">
        <div className="note-content">
          <h4 className="note-title">{title}</h4>
          <p className="note-details">{details}</p>
        </div>
        <button className="note-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </Draggable>
  );
};

export default StickyCard;
