var React = require('react');


var TodoSearch = React.createClass ({
  handleSearch: function() {
    var showCompleted= this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);

  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="search Todo" onChange={this.handleSearch}></input>
        </div>
        <div>
          <label>
            <input type="checkbox"  ref="showCompleted" onChange={this.handleSearch}></input>
            Show completed todo's
          </label>
        </div>
      </div>

    );
  }
});


module.exports=TodoSearch;
