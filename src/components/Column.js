import React from 'react';
import Ticket from './Ticket';
import '../styles/components/Column.css';

const statusIcons = {
  'Todo': '/To-do.svg',
  'In progress': '/in-progress.svg',
  'Backlog': '/Backlog.svg',
  'Done': '/Done.svg" alt="done',
  'Cancelled': '/Cancelled.svg" alt="cancel'
};


const Column = ({ name, tickets, users, grouping, sorting }) => {
  const icon = grouping === 'status' && sorting === 'priority' ? statusIcons[name] : null;

  return (
    <div className="column">
      <h2 className="column-header">
        {icon && <img src={icon} alt={name} className="status-icon" />}
        {name} ({tickets.length})
      </h2>
      <div className="tickets-container">
        {tickets.map(ticket => (
          <Ticket 
            key={ticket.id} 
            ticket={ticket} 
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;