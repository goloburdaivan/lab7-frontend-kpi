import React from 'react';
import './GoodsCard.css';

const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-image" />
            <p className="goods-name">{name}</p>
            <p className="goods-price">Cost: {price} gm</p>
        </div>
    );
};

export default GoodsCard;