import React from 'react';
import './App';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Business from '../Business/Business';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
   }
}
    

export default App;
