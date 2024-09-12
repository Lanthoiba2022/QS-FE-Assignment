import React from 'react';
import Ticket from './Ticket';
import '../styles/components/Column.css';

const Column = ({ name, tickets, users }) => {
  return (
    <div className="column">
      <h2 className="column-header">{name} ({tickets.length})</h2>
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