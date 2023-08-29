import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useEffect } from 'react';
import { fetchUsers } from './api/table';




function App() {
  const [tableInfo, setTableInfo] = useState([]); 

  const getTableInfo = async () => {
    try {
      const usersData = await fetchUsers();
      setTableInfo(usersData); 
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getTableInfo();
  }, []);

  return (
    
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Profile Picture</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Rating</th>
          <th>Status</th>
          <th>Hero Project</th>
        </tr>
      </thead>
      <tbody>
        {tableInfo.map((user: any) => (
          <tr>
            <td>{user.name}</td>
            <td><img src={user.avatar} alt={user.name} /></td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.rating}</td>
            <td>{user.status ? 'Active' : 'Inactive'}</td>
            <td>{user.hero_project}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
}

export default App;
