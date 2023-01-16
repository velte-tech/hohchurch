import React from 'react'
import './Box_check.css'

const Box_check = () => {

     const [checked, setChecked] = React.useState(false);

     const handleChange = () => {
         setChecked(!checked);
     };

  return (
   <div className='box-check'>
      <Checkbox
        label="SMS"
        value={checked}
        onChange={handleChange}
      />

      {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}

export default Box_check