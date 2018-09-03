const ListItem = (props) => {
  return (
    <li>
      <span onClick={(e) => props.toggleChecked(props.item)}>
        {props.item.checked ? <s>{props.item.item}</s> : props.item.item}
      </span>
      <input type="button" value="Delete" onClick={() => props.handleDeleteItem(props.item.id)} />
    </li>
  );
};
