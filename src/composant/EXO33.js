import React, { useState } from 'react';

// Child component
const ChildInput = ({ onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div>
      <label>
        Child Input:
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

// Parent component
const MyForm = () => {
  const [child1Input, setChild1Input] = useState('');
  const [child2Input, setChild2Input] = useState('');

  // Check if all inputs are filled
  const isFilled = child1Input !== '' && child2Input !== '';

  // Function to handle child input changes
  const handleChildInputChange = (childNumber, value) => {
    if (childNumber === 1) {
      setChild1Input(value);
    } else if (childNumber === 2) {
      setChild2Input(value);
    }
  };

  return (
    <div style={{ backgroundColor: isFilled ? 'green' : 'red', padding: '20px' }}>
      <h2>Parent Component</h2>

      {/* Two child components */}
      <ChildInput onInputChange={(value) => handleChildInputChange(1, value)} />
      <ChildInput onInputChange={(value) => handleChildInputChange(2, value)} />
    </div>
  );
};

export default MyForm;
