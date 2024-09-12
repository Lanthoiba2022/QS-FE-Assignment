import React, { useState, useEffect } from 'react';
import './styles/App.css';
import ControlPanel from './components/ControlPanel';
import Column from './components/Column';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const priorityMap = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
  };

  const groupTickets = () => {
    let grouped = {};
    switch (grouping) {
      case 'status':
        grouped = tickets.reduce((acc, ticket) => {
          (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
          return acc;
        }, {});
        break;
      case 'user':
        grouped = tickets.reduce((acc, ticket) => {
          const user = users.find(u => u.id === ticket.userId);
          (acc[user.name] = acc[user.name] || []).push(ticket);
          return acc;
        }, {});
        break;
      case 'priority':
        grouped = tickets.reduce((acc, ticket) => {
          const priority = priorityMap[ticket.priority];
          (acc[priority] = acc[priority] || []).push(ticket);
          return acc;
        }, {});
        break;
      default:
        grouped = { 'All Tickets': tickets };
    }
    return grouped;
  };

  const sortTickets = (groupedTickets) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach(key => {
      sortedGroups[key] = groupedTickets[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    return sortedGroups;
  };

  const groupedAndSortedTickets = sortTickets(groupTickets());

  return (
    <div className="app">
      <ControlPanel 
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <main className="kanban-board">
        {Object.entries(groupedAndSortedTickets).map(([columnName, columnTickets]) => (
          <Column 
            key={columnName} 
            name={columnName} 
            tickets={columnTickets}
            users={users}
          />
        ))}
      </main>
    </div>
  );
};

export default App;