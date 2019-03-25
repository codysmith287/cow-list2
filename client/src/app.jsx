import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cow from './components/Cow.jsx';
import CowList from './components/CowsList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cow: '',
      cows: []
    }
    this.handleCowListClick = this.handleCowListClick.bind(this);
  }

  getCowList() {
    fetch('/api/cows')
    .then(response => response.json())
    .then(cows => {
      console.log(cows)

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

  render() {
    return (
      <div>
      <h1>Cow List</h1>
        <Cow cow={this.state.cow} />
        <CowList cows={Object.values(this.state.cows)} onCowListClick = {this.handleCowListClick}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));