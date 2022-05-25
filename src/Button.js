const Button = ({ label, onTap }) => {
  return (
    <button className="bg-blue-600 w-36 text-white h-8" onClick={onTap}>
      {label}
    </button>
  );
};
export default Button;
