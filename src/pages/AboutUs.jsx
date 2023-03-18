import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom';

const AboutUs = () => {

  const [searchParams, setSearchParams] = useSearchParams("");
  const result = ["name", "lastName", "age"].map(item => searchParams.get(item));
  console.log(result);

  const navigate = useNavigate();

  const [state, setState] = useState({
    "name": "",
    "lastName": "",
    "age": ""
  });

  const { name, lastName, age } = state;

  const handleChange = (e) => {

    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })

  };

  return (
    <>
      <div>AboutUs</div>

      <input name='name' onChange={handleChange} type="text" />
      <input name='lastName' onChange={handleChange} type="text" />
      <input name='age' onChange={handleChange} type="text" />

      <button type='button' onClick={() => navigate(`search?name=${name}&&lastName=${lastName}&&age=${age}`)}></button>
    </>
  );

};

export default AboutUs;