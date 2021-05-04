import React, { Component } from "react";
import EmployeeTabs from './EmployeeTabs';
import Search from '../Search/Search';
import Header from '../Header/Header';
import API from "../utils/API";

class EmployeeTable extends Component {
  state = {
    search: "",
    employees: []
  }
  // Search the random user API
  componentDidMount() {
    this.findUsers();
  }

  //load random users as employees from the randomuser API

  findUsers = () => {
    API.findUsers()
      .then((res) => {
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results
        })
      }
      )
      .catch((err) => console(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const searchVal = document.querySelector("name=search").value;
    let filtered = [...this.state.employees]
    filtered = filtered.filter(employee => employee.name.first === searchVal)
    this.setState({
      employees: filtered

    })
  }


  handleRemove = id => {
    console.log(id);
    this.setState({
      employees: this.state.employees.filter(employee => employee.id.value !== id)
    });
  }

  handleSort = (key1, key2, asc) => {
    // copy
    let employeeSorted = [...this.state.employees];

    // sort 
    employeeSorted.sort((a, b) => {
      return a[key][key2] > b[key1][key2] ? asc * 1 : asc * -1;
    });

    // set state
    this.setState({ employees: employeeSorted });

  }
  render() {
    return (
      <div className="search-div">
        <Header />
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <h3>Sort By:</h3>
        <button onClick={() => this.handleSort('name', 'first', 1)}>Sort By First Name</button>
        <button onClick={() => this.handleSort('name', 'last', 1)}>Sort By Last Name</button>
      </div>
    )
  }
}

export default EmployeeTable;