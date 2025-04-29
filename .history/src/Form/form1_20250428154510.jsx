import React, { useState, useEffect } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [Name, setSubmittedName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setSubmittedName(name);
  }, [name]);

  return (
    <form>
      {}
      {nname && <h2>Hello, {submittedName}!</h2>}

      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default MyForm;
