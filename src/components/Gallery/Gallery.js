import React from 'react';
import GoodsCard from './GoodsCard';
import './Gallery.css';

const Gallery = () => {
    const goods = [
        {
            image: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png',
            name: 'Apple',
            price: 15,
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXiGjgRS-dT8zqguqo5zy-aYPPjOYG5wrVQ&s',
            name: 'Pear',
            price: 20,
        },
        {
            image: 'https://static.vecteezy.com/system/resources/previews/011/222/254/non_2x/ripe-red-wet-grape-isolated-png.png',
            name: 'Grape',
            price: 25,
        },
        {
            image: 'https://e7.pngegg.com/pngimages/216/6/png-clipart-red-peach-fruit-juice-peach-fruit-crisp-food-peach-eating-superfood-thumbnail.png',
            name: 'Peach',
            price: 18,
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/1200px-Banana.png',
            name: 'Banana',
            price: 12,
        },
        {
            image: 'https://png.pngtree.com/png-clipart/20190515/original/pngtree-orange-png-png-image_3619070.jpg',
            name: 'Orange',
            price: 17,
        },
    ];

    return (
        <div className="gallery">
            {goods.map((item, index) => (
                <GoodsCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default Gallery;
