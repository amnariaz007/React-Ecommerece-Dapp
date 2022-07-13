import { createContext, useState } from 'react';
import React from 'react';

import shoes from '../img/pic1.jpg';
import shoebags from '../img/pic2.jpg';
import pillow from '../img/pic3.jpg';
import laundry from '../img/pic4.jpg';
import bags from '../img/bags.jpg';
import shirt from '../img/shirt.jpg';
import sneakers from '../img/sneakers.jpg';
import ds1 from '../img/ds1.jpg';
import hover from '../img/hover.jpg';
import glasses from '../img/glasses.jpeg';
import light from '../img/light.jpg';
import dangari from '../img/dangari.jpg';
export const JoDilKary = createContext();

const ProductsContextProvider = (props) => {
 const [products] = useState([
    {id: 1, name: " Lether Bag",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 500, status: 'hot' , image: bags},
    {id: 2, name: " Friends T'Shirt",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 600, status: 'hot' , image: shirt},
    {id: 3, name: " white Sneakers",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 700, status: 'hot' , image: sneakers},
    {id: 4, name: "Fairy Lights",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 800, status: 'hot' , image: light},
    {id: 5, name: "DSLR Camera ",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 900, status: 'hot' , image: ds1},
    {id: 6, name: "Hover Board",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 300, status: 'hot' , image: hover},
    {id: 7, name: "Glasses",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 200, status: 'hot' , image: glasses},
    {id: 8, name: "Dangri Jeans",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 100, status: 'hot' , image: dangari},
     {id: 9, name: "Travel Bag",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 500, status: 'hot' , image: shoes},
     {id: 10, name: "Travel Shoes Bags",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 1000, status: 'hot', image: shoebags},
     {id: 11, name: "Travel Pillow",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 1500, status: 'hot', image: pillow},
     {id: 12, name: "Lundry Bags",title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 2000, status: 'hot' , image: laundry},
    ]);

    return (
        <JoDilKary.Provider value={{products: [...products]}}>
            {props.children}
        </JoDilKary.Provider>
    )
}

export default ProductsContextProvider;