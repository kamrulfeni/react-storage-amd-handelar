import React from 'react';
import { add } from '../Utilities/Calculate';
// import add from '../Utilities/Calculate';

const Cosmetics = () => {
    const first = 6;
    const second = 7;
    const total =add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetics;