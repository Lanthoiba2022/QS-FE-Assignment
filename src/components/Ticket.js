import React from 'react';
import '../styles/components/Ticket.css';

const priorityIcons = {
  4: '🔴', // Urgent
  3: '🟠', // High
  2: '🟡', // Medium
  1: '🟢', // Low
  0: '⚪' // No priority
};

const Ticket = ({ ticket, user }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && <img className="user-avatar" src={user.avatar} alt={user.name} />}
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-footer">
        <span className="priority-icon">{priorityIcons[ticket.priority]}</span>
        <span className="feature-tag">• {ticket.tag}</span>
      </div>
    </div>
  );
};

export default Ticket;