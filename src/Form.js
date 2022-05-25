import { useState } from 'react';
import Radio from './Radio';

import Checkbox from './Checkbox';

const Form = ({
  setTextInput,
  checkbox,
  setCheckbox,

  setRadioOne,

  setRadioTwo,

  setRadioThree,
  setRadioFour,

  setScale,
}) => {
  return (
    <div>
      <div className="mx-32">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-500">
            Pain & Functional Description
          </h1>
          <div className="w-1/2 text-center mb-10">
            <p>
              The description of current situaton gives you Optimum teainer a
              picture of and clues to the underlying causes of your problems
            </p>
          </div>
        </div>
        <div>
          <form className="w-full space-y-6">
            If you have problem with pains/aches, stiffness, weakness or
            functional problems,describe this/these below(List the symptoms in
            descending order with the most troublesome first)
            <textarea
              onChange={e => setTextInput(e.target.value)}
              className="w-full border-[1px] border-black"
              rows="5"
            ></textarea>
            <Radio
              ontap={e => setRadioOne(e.target.value)}
              label="Have you been diagnosed with this problem?"
              name="option1"
              value1="Not relevant"
              value2="Yes"
              value3="No"
            />
            <Radio
              ontap={e => setRadioTwo(e.target.value)}
              label="Did the problem start after physical trauma?"
              name="option2"
              value1="Not relevant"
              value2="Yes"
              value3="No"
            />
            <Radio
              ontap={e => setRadioThree(e.target.value)}
              label="Did the problem start after mental trauma?"
              name="option3"
              value1="Not relevant"
              value2="Yes"
              value3="No"
            />
            <span className="block">
              How often do you experience the problem?
            </span>
            <input
              onChange={e => setRadioFour(e.target.value)}
              type="radio"
              name="option4"
              value="Not relevant"
            />
            <label className="mx-6">Not relevant</label>
            <input
              type="radio"
              name="option4"
              onChange={e => setRadioFour(e.target.value)}
              value="Dialy"
            />
            <label className="mx-6">Dialy</label>
            <input
              type="radio"
              name="option4"
              onChange={e => setRadioFour(e.target.value)}
              value="Seversl times/week"
            />
            <label className="mx-6">Seversl times/week</label>
            <input
              type="radio"
              name="option4"
              onChange={e => setRadioFour(e.target.value)}
              value="A few times/month"
            />
            <label className="mx-6">A few times/month</label>
            <input
              type="radio"
              name="option4"
              onChange={e => setRadioFour(e.target.value)}
              value="A few times/Year"
            />
            <label className="mx-6">A few times/Year</label>
            <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} />
            <span className="mt-4">
              How intense is the experience of the problem on a 0-10 scale?
            </span>
            <br />
            <div className="flex items-center">
              <span className="mx-6">
                <label>1</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="1"
                />
              </span>
              <span className="mx-4">
                <label>2</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="2"
                />
              </span>
              <span className="mx-4">
                <label>3</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="3"
                />
              </span>
              <span className="mx-4">
                <label>4</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="4"
                />
              </span>
              <span className="mx-4">
                <label>5</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="5"
                />
              </span>
              <span className="mx-4">
                <label>6</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="6"
                />
              </span>
              <span className="mx-4">
                <label>7</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="7"
                />
              </span>
              <span className="mx-4">
                <label>8</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="8"
                />
              </span>
              <span className="mx-4">
                <label>9</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="9"
                />
              </span>
              <span className="mx-4">
                <label>10</label>
                <br />
                <input
                  type="radio"
                  onChange={e => setScale(e.target.value)}
                  name="option5"
                  value="10"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
