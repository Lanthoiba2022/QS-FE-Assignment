import React, { useState } from 'react';
import '../styles/components/ControlPanel.css';

const ControlPanel = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="control-panel">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src="/Display.svg" alt="Left Icon" className="icon-left" />
          <span>Display</span>
        <img src="/down.svg" alt="Right Icon" className="icon-right" />
      </button>
      {isOpen && (
        <div className="control-options">
          <div>
            <label>Grouping</label>
            <select className="grouping-select" value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering</label>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;