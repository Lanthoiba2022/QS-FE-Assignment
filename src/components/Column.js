import React from 'react';
import Ticket from './Ticket';
import '../styles/components/Column.css';

const statusIcons = {
  'Todo': '/To-do.svg',
  'In progress': '/in-progress.svg',
  'Backlog': '/Backlog.svg',
  'Done': '/Done.svg',
  'Cancelled': '/Cancelled.svg'
};

const priorityIcons = {
  4: '/SVG - Urgent Priority colour.svg',
  3: '/Img - High Priority.svg',
  2: '/Img - Medium Priority.svg',
  1: '/Img - Low Priority.svg',
  0: '/No-priority.svg'
};

const priorityNames = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};


const Column = ({ name, tickets, users, grouping, sorting }) => {
  let icon = null;
  let displayName = name;

  if (grouping === 'status' && sorting === 'priority') {
    icon = statusIcons[name];
  }
  if (grouping === 'status' && sorting === 'title') {
    icon = statusIcons[name];
  }
  else if (grouping === 'priority') {
    const priorityLevel = Object.keys(priorityNames).find(key => priorityNames[key] === name);
    icon = priorityIcons[priorityLevel];
    displayName = `${name}`;
  }


  return (
    <div className="column">
      <h2 className="column-header">
        {icon && <img src={icon} alt={name} className={grouping === 'priority' ? 'priority-icon' : 'status-icon'} />}
        <span>{displayName}</span>
        <span className="ticket-count">{tickets.length}</span>
        <img src="/add.svg" alt="Add" className="icon icon-1" />
        <img src="/3 dot menu.svg" alt="Menu" className="icon" />
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