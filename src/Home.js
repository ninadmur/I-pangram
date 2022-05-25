import Form from './Form';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
const Home = () => {
  const [textInput, setTextInput] = useState('');
  const [checkbox, setCheckbox] = useState([]);
  const [radioOne, setRadioOne] = useState();
  const [radioTwo, setRadioTwo] = useState();
  const [radioThree, setRadioThree] = useState();
  const [radioFour, setRadioFour] = useState();
  const [scale, setScale] = useState();
  console.log(scale);

  const navigate = useNavigate();

  const [elements, setElements] = useState([
    setTextInput,
    checkbox,
    setCheckbox,
    setRadioOne,
    setRadioTwo,
    setRadioThree,
    setRadioFour,
    setScale,
    <Form
      setTextInput={setTextInput}
      checkbox={checkbox}
      setCheckbox={setCheckbox}
      setRadioOne={setRadioOne}
      setRadioTwo={setRadioTwo}
      setRadioThree={setRadioThree}
      setRadioFour={setRadioFour}
      setScale={setScale}
    />,
  ]);
  const addForm = () => {
    setElements([
      ...elements,

      <Form
        setTextInput={setTextInput}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        setRadioOne={setRadioOne}
        setRadioTwo={setRadioTwo}
        setRadioThree={setRadioThree}
        setRadioFour={setRadioFour}
        setScale={setScale}
      />,
    ]);
  };

  const handleNext = e => {
    e.preventDefault();
    const details = {
      textInput,
      radioOne,
      radioTwo,
      radioThree,
      radioFour,
      checkbox,
      scale,
    };
    // console.log(details);
    navigate('/details', { state: { details } });
  };

  return (
    <div>
      {elements.map(x => {
        return x;
      })}
      <div className="flex justify-center">
        <button
          onClick={addForm}
          className="flex items-center justify-center text-2xl rounded-full h-5 w-5 bg-blue-500 text-white font-bold"
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <Button label="Back" />
        <Button label="Next" onTap={handleNext} />
      </div>
    </div>
  );
};
export default Home;
