    import React, { useState } from 'react';

    function MyForm() {
      const [name, setName] = useState('');

      const handleChange = (event) => {
        setName(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with name:', name);
      };

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }

    export default MyForm;