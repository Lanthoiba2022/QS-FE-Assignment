import React, { useState } from 'react';
import '../styles/components/ControlPanel.css';

const ControlPanel = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="control-panel">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        ☰ Display
      </button>
      {isOpen && (
        <div className="control-options">
          <div>
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
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