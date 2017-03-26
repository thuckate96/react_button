var InputCom = React.createClass({
  add: function(){
    this.setState({num: this.state.num+1});
  },
  getInitialState: function(){
    return {num: 0}
  },
  render: function(){
    return (
      <button onClick = {this.add}> Hello {this.state.num} </button>
    );
  }
});
ReactDOM.render(
  <div>
  <InputCom/>
  </div>,
  document.getElementById("root")
);
