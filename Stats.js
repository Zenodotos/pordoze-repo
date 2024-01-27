export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Dodaj rzeczy do swojej listy</em>
      </p>
    );
  const packedNumber = items.filter((item) => item.packed).length;
  const packedPercentage =
    items.length > 0 ? (packedNumber / items.length) * 100 : 0;
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Spakowałeś juz wszystko, mozesz lecieć"
          : `Masz na liście ${items.length} rzeczy, i masz juz spakowane
        ${" " + packedNumber} (${packedPercentage.toFixed(2)}%)`}
      </em>
    </footer>
  );
}
