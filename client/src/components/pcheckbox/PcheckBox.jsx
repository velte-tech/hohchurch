import React from 'react'
import './PcheckBox.css'

const PcheckBox = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

  return (
    
     <div className='box-check'>
        
      <Checkbox
        label="Early Childhood"
        value={checked}
        onChange={handleChange}
      />

    </div>
    
  )
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    
    
    <label className='pnl'>
        
        <p>BIRTH - 35 MONTHS</p>
        
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    
    </label>
    
    
  );
}


export default PcheckBox