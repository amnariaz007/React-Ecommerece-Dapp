import React, { useContext } from 'react';
import App from './App';
import { Chachu } from './App';

const ComC = () => {
    const fname = useContext(Chachu);
    console.log(fname);
    return (
        <h1>
            My name is {fname}
        </h1>
    )
}

export default ComC;