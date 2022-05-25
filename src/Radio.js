const Radio = ({ label, name, value1, value2, value3, ontap }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <span>{label}</span>
      </div>
      <div className="flex-1">
        <input onChange={ontap} type="radio" name={name} value={value1} />
        <label className="mx-6">{value1}</label>
        <input onChange={ontap} type="radio" name={name} value={value2} />
        <label className="mx-6">{value2}</label>
        <input onChange={ontap} type="radio" name={name} value={value3} />
        <label className="mx-6">{value3}</label>
      </div>
    </div>
  );
};
export default Radio;
