import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cow from './components/Cow.jsx';
import CowList from './components/CowsList.jsx';
import NewCow from './components/NewCow.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cow: '',
      cows: []
    }
    this.handleCowListClick = this.handleCowListClick.bind(this);
    this.handleSubmitNewCow = this.handleSubmitNewCow.bind(this);
  }

  getCowList() {
    fetch('/api/cows')
    .then(response => response.json())
    .then(cows => {
      const cowObj = {};
      cows.forEach(cow => {
        cowObj[cow.id] = cow;
      });

      this.setState ({
        cows: cowObj
      }, () => console.log('cows state', this.state.cows))
    })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getCowList();
  }

  handleCowListClick(id) {
    this.setState ({
      cow: this.state.cows[id]
    })
  }

  handleSubmitNewCow(cow, desc) {
    console.log(`cow: ${cow}`);
    console.log(`desc: ${desc}`);
    let newCowObj = {
      name: cow,
      description: desc
    }
    return fetch('/api/cows', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newCowObj),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(response => console.log(response))
    .then(
      console.log("post successful!")
    )
    .then(this.getCowList())
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
      <h1>Cow List</h1>
        <Cow cow={this.state.cow} />
        <CowList
          cows={Object.values(this.state.cows)}
          onCowListClick = {this.handleCowListClick}
        />
        <NewCow
          onSubmitNewCow = {this.handleSubmitNewCow}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));