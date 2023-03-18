import React, { useContext } from 'react';
import { Card } from '../Components/Card.jsx';
import { products } from "../Components/product.jsx";
import { UserContext } from '../Context/UserGlobal';
import { Navigate } from "react-router-dom"

const SecretData = () => {

  const { permission } = useContext(UserContext);

  if (!permission) return <Navigate to="/" />;

  return (
    <ul className="card-container">

      {products.map((e, i) => {

        return (

          <Card key={`card-${i}`} id={e.id} type={e.type} name={e.name} about={e.about} btn="on" />

        );

      })}

    </ul>
  );

};

export default SecretData;