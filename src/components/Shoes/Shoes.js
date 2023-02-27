import React from 'react';
import { add, divide, multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 1000;
    const second = 500;
    const result = multiply(first, second);
    const sum = add(first, second);
    const sumOfDivide = divide(first, second);
    return (
        <div >
            <h3>This is Shoes Compo</h3>
            <p> Results: {result} </p>
             <p> and total:{sum}</p>
             <p> divided:{sumOfDivide}</p>
        </div>
    );
};

export default Shoes;