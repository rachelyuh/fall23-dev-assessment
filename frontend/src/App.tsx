import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useEffect } from 'react';
import { fetchUsers } from './api/table';




function App() {

  const [tableInfo, setTableInfo] = useState<any[]>([]); 

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


  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    avatar: "",
    hero_project: "",
    notes: "",
    email: "",
    phone: "",
    rating: "",
    status: true,
    id: ""
  });


  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNewVolunteer((prevVolunteer) => ({
      ...prevVolunteer,
      [name]: value,
    }));
  };

  const handleAddVolunteer = () => {
    setTableInfo((tableInfo) => [...tableInfo, newVolunteer]);
    setNewVolunteer({
      name: "",
      avatar: "",
      hero_project: "",
      notes: "",
      email: "",
      phone: "",
      rating: "",
      status: true,
      id: ""
    });
  };



  return (
    <div>
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
      <div className="form-container">
  <table>
    <tbody>
      <tr>
        <td>
          <label>Name:</label>
        </td>
        <td>
          <input
            type="text"
            name="name"
            value={newVolunteer.name}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Profile Picture:</label>
        </td>
        <td>
          <input
            type="text"
            name="avatar"
            value={newVolunteer.avatar}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Phone:</label>
        </td>
        <td>
          <input
            type="text"
            name="phone"
            value={newVolunteer.phone}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Email:</label>
        </td>
        <td>
          <input
            type="text"
            name="email"
            value={newVolunteer.email}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Rating:</label>
        </td>
        <td>
          <input
            type="text"
            name="rating"
            value={newVolunteer.rating}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Status:</label>
        </td>
        <td>
          <label>
            <input
              type="checkbox"
              name="status"
              checked={newVolunteer.status}
              onChange={handleInputChange}
            />
            Active
          </label>
        </td>
      </tr>
      <tr>
        <td>
          <label>Hero Project:</label>
        </td>
        <td>
          <input
            type="text"
            name="hero_project"
            value={newVolunteer.hero_project}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button onClick={handleAddVolunteer}>Add Volunteer</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>    
    </div>

  );
}

export default App;
