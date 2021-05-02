import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import EmployeeTabs from './components/EmployeeTabs/EmployeeTabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <EmployeeTabs/>
    </div>
  );
}

export default App;
