function List({ title, items }) {
  const listItems = items.map((brand) => (
    <li key={brand.id}>
      {brand.name} - {brand.valuation}B
    </li>
  ));
  
  return (
    <>
      <h2>{title}</h2>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
