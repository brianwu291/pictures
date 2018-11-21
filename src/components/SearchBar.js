import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={term:""};
    console.log(props);
    console.log(this.state);
  };

  render(){
    return(
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={
            (e) => {
              e.preventDefault();
              this.props.onSubmit(this.state.term);
            }
          }>
          <div className="field">
            <label htmlFor="text">Image Search</label>
          <input
            type="text"
            id="text"
            value={this.state.term}
            placeholder="Type Somthing And Press Enter To Search..."
            onChange={
              (e) => this.setState({
                term:e.target.value
              })
            }>
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
