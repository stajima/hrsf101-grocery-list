const ListItem = (props) => {
  return (
    <li onClick={(e) => props.toggleChecked(props.item)}>
      {props.item.checked ? <s>{props.item.item}</s> : props.item.item}
    </li>
  );
};
