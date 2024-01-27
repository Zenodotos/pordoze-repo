export 
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.num} {item.desc}
        <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>
          X
        </button>
      </span>
    </li>
  );
}
