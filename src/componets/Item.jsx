
import React from 'react';

function Item({list,removeColor}){
    return (
        <div>{list.map( (item, index) => {
            return (
                <div className='item' key={item.id} style={{background: item.text }} >
                    <div className='item__index'>{index + 1}</div>
                    <button className='remove' onClick={() => {removeColor(item.id)}}>&times;</button>
                </div>
            )
            })}
        </div>
    )
}

export default Item;