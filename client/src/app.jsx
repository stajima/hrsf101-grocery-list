class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      filteredItems: [],
      stores: [],
      currentStoreId: null,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleStoreSelector = this.handleStoreSelector.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
    this.getListItems = this.getListItems.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  componentWillMount() {
    this.getStores();
    this.getListItems();
  }

  getStores() {
    return axios
      .get('/store')
      .then((response) => this.setState({ stores: response.data }))
      .catch((error) => console.log('getStores error', error));
  }

  getListItems() {
    return axios
      .get('/item')
      .then((response) => this.setState({ allItems: response.data }, this.filterItemsByStore))
      .catch((error) => console.log('getListItems error', error));
  }

  filterItemsByStore() {
    const filteredItems = this.state.allItems.filter((item) => item.storeId === this.state.currentStoreId);
    this.setState({ filteredItems: filteredItems });
  }

  toggleChecked(item) {
    const updatedItem = Object.assign({}, item);
    updatedItem.checked = item.checked ? 0 : 1;
    this.handleItemUpdate(updatedItem);
  }

  handleItemUpdate(updatedItem) {
    return axios.put('/item', updatedItem).then(this.getListItems);
  }

  handleAddItem(inputValue) {}

  handleStoreSelector(storeId) {
    this.setState({ currentStoreId: Number(storeId) }, this.filterItemsByStore);
  }

  render() {
    return (
      <div>
        <StoreSelector handleStoreSelector={this.handleStoreSelector} stores={this.state.stores} />
        {!this.state.currentStoreId ? null : <AddItem handleAddItem={this.handleAddItem} />}
        {!this.state.currentStoreId ? null : (
          <List toggleChecked={this.toggleChecked} items={this.state.filteredItems} />
        )}
      </div>
    );
  }
}
