import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [num, setNum] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) {
      return;
    }

    const newItem = { desc, num, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDesc("");
    setNum(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Co chcesz spakować?</h3>
      <select value={num} onChange={(e) => setNum(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="rzecz.."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>Dodaj</button>
    </form>
  );
}
