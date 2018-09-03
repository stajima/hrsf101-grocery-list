const StoreSelector = (props) => {
  return (
    <select onChange={(e) => props.handleStoreSelector(e.target.value)} name="store">
      <option value="">Select a store</option>
      {props.stores.map((store) => (
        <option key={store.id} value={store.id}>
          {store.name}
        </option>
      ))}
    </select>
  );
};
