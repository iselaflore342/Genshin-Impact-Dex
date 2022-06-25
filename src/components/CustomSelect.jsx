const CustomSelect = ({ name, label, itemArray, fetchTypes }) => {
  return (
    <select name={name} onChange={(e) => fetchTypes(name, e.target.value)}>
      <option value="">{label}</option>
      {itemArray.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
