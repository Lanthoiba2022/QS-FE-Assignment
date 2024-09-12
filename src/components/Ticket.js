import React from 'react';
import '../styles/components/Ticket.css';

const priorityIcons = {
  4: <img src="/SVG - Urgent Priority colour.svg" alt="Urgent" />,
  3: <img src="/Img - High Priority.svg" alt="High" />,
  2:  <img src="/Img - Medium Priority.svg" alt="Medium" />,
  1: <img src="/Img - Low Priority.svg" alt="Low" />,
  0: <img src="/no-priority.svg" alt="No Priority" />
};

const Ticket = ({ ticket, user }) => {
  const userAvatar = `/${user.name}.png`;
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && <img className="user-avatar" src={userAvatar} alt={user.name} />}
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