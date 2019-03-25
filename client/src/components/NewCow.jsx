import React from 'react';

class NewCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.submitNewCow = this.submitNewCow.bind(this);
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  handleDescChange(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value
    })
  }

  submitNewCow() {
    this.props.onSubmitNewCow(this.state.name, this.state.description)
  }

  render() {
    return (
      <div>
        <h4>Enter New Cow Here:</h4>
        Name: <input
                type="text"
                value={this.state.name}
                onChange = {this.handleNameChange}
              />
        <br/>
        Description: <input
                        type="text"
                        size="50"
                        value={this.state.description}
                        onChange = {this.handleDescChange}
                      />
        <br/>
        <button
          type="submit"
          onClick={this.submitNewCow}
        >Submit</button>
      </div>
    )
  }
}


export default NewCow;

