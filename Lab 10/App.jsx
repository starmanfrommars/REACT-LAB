import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      searchQuery: "",
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchQuery !== this.state.searchQuery){
      this.fetchUsers();
    }
  }

  fetchUsers = ()=> {
    this.setState({loading: true, error: null});

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((responce)=> {
        const filteredUsers = responce.data.filter((user)=> 
        user.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
        this.setState({ users: filteredUsers, loading: false});
      })
      .catch((error)=> {
        this.setState({error: 'Failed to fetch users', loading: false});
      })
  }

  handleSearchChange = (e)=> {
    this.setState({searchQuery: e.target.value});
  }

  handleRefresh = ()=> {
    this.setState({ searchQuery: "", users: [], loading: true, error: null}, ()=>{this.fetchUsers()});
  }

  render() {
    const { users, searchQuery, error, loading } = this.state;

    return (
      <div className="container">
        <h1 className="header">User List</h1>

        <div className="search-container">
          <input type="text" value={searchQuery} onChange={this.handleSearchChange} placeholder="Search by name..." className='search-input' />
          <button className="refresh-btn" onClick={this.handleRefresh}>Refresh</button>
        </div>

        {loading && <p>Loading Users...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && users.length===0 && <p>No users found.</p>}

        {!loading && !error && users.length>0 && (
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=> (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}
