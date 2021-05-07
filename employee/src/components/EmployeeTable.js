import React, { Component } from "react";
import EmployeeTabs from './EmployeeTabs/EmployeeTabs';
import Search from './Search/Search';
import Header from './Header/Header';
import API from "../utils/API";

class EmployeeTable extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: []
  }
  // Search the random user API
  componentDidMount() {
    this.findUsers();
  }

  //load random users as employees from the randomuser API

  findUsers = () => {
    API.getUsers()
      .then((result) => {
        this.setState({
          employees: result.data.results,
          filteredEmployees: result.data.results
        })
      }
      )
      .catch((err) => console(err));
      // console.log(this.state.employees);
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
    const searchVal = document.querySelector("[name=search]").value;
    let filtered = [...this.state.employees]
    // this only works if the first name is fully spelled out
    filtered = filtered.filter(employees => employees.name.first.toLowerCase().indexOf(searchVal.toLowerCase()) === 0)
    this.setState({
      ...this.state,
      filteredEmployees: filtered

    })
    console.log(filtered);
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
      return a[key1][key2] > b[key1][key2] ? asc * 1 : asc * -1;
    });

    // set state
    this.setState({ filteredEmployees: employeeSorted });
    console.log(employeeSorted);
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
        <EmployeeTabs
            employees={this.state.filteredEmployees}
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}

export default EmployeeTable;