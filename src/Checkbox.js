const Textbox = ({ checkbox, setCheckbox }) => {
  const hanleCheck = e => {
    // let { name, checked } = e.target;
    if (e.target.checked) {
      setCheckbox(prevstate => [...prevstate, e.target.value]);
    }
  };
  return (
    <div className="space-y-6">
      <p>When do you experience the problem?</p>
      <input
        onChange={hanleCheck}
        type="checkbox"
        name="not"
        value="Not relevant"
      />
      <label className="mx-6">Not relevant</label>
      <br />
      <input
        onChange={hanleCheck}
        type="checkbox"
        name="laying"
        value="When laying down"
      />
      <label className="mx-6">When laying down</label>
      <br />
      <input
        onChange={hanleCheck}
        type="checkbox"
        name="sitting"
        value="When sitting"
      />
      <label className="mx-6">When sitting</label>
      <br />
      <input
        onChange={hanleCheck}
        type="checkbox"
        name="standing"
        value="under standing"
      />
      <label className="mx-6">under standing</label>
      <br />
      <input
        onChange={hanleCheck}
        type="checkbox"
        name="walking"
        value="In walking"
      />
      <label className="mx-6">In walking</label>
      <br />
    </div>
  );
};
export default Textbox;
