const List = (props) => {
  if (props.items.length > 0) {
    return (
      <ul>
        {props.items.map((item) => (
          <ListItem
            handleDeleteItem={props.handleDeleteItem}
            toggleChecked={props.toggleChecked}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    );
  } else {
    return <p>No items!</p>;
  }
};
