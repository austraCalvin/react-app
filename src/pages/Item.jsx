import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card } from '../Components/Card.jsx';
import { products } from '../Components/product.jsx';

const Item = () => {

    const { id } = useParams();
    const { type, name, about } = products.find(e => e.id === id) || {};
    const [searchParams, setSearchParams] = useSearchParams("");
    const result = ["name", "lastName", "age"].map(item => searchParams.get(item));
    console.log(result);


    return (
        <>
            {
                type ?
                    <ul className="card-container">
                        <h1 className='item-title'>Item</h1>
                        <Card key="item-found" id={id} type={type} name={name} about={about} btn="off" />
                    </ul> :
                    <h1 className='item-title'>no item found</h1>
            }
        </>
    );

};

export default Item;