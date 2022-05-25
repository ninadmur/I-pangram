import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.details;

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-4xl mb-10 text-center">Summary</h1>
      <table className="w-full text-center">
        <thead>
          <tr>
            {Object.keys(data).map((data, index) => {
              return <th key={index}>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(data).map((data, index) => {
              return <td key={index}>{data}</td>;
            })}
          </tr>
        </tbody>
      </table>
      <div className="flex mt-24 justify-center">
        <Button label="Back" onTap={handleBack} />
      </div>
    </div>
  );
};
export default Details;
