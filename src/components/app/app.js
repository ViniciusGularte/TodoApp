import React, {Component} from 'react';
import List from '../list/List';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <List/>
      </div>
    );
  }
}
export default App;
