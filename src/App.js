import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
=======
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component {
    id = 2
    state = {
        information:[
            {
                id:0,
                name:'온',
                phone:'010-1'
            },
            {
                id:1,
                name:'율',
                phone:'010-2'
            }
        ]
    }

    handleCreate = (data) => {
        // const { information } = this.state;
        const information = this.state.information;
        this.setState({
            information:information.concat({ id: this.id++, ...data })
        })
    }

    render() {
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList data={this.state.information}/>
            </div>
        );
    }
} 
>>>>>>> 0f964f69f9ff6a29f153d7bc79489eb9860e8076

export default App;
