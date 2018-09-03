class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.handleInputChange(e)} />
        <input
          type="button"
          value="Add Item"
          onClick={() => {
            this.props.handleAddItem(this.state.inputValue);
          }}
        />
      </div>
    );
  }
}
