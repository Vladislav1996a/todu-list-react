import React, { useState } from 'react';
import Item from './Item';


function List() {
    let [list, setList] = useState([
            {id:0, text:'linear-gradient(45deg, #FF0000, #0000FF)'}, 
            {id:1, text:'linear-gradient(45deg, #EECFBA, #C5DDE8)'} 
        ]);

    let [value, setValue] = useState('');
    let [color, setColor] = useState('');

   let inputValidOne = false;
    let inputValidTwo = false;
    let diseble = false;

    function valid() {
        if(value[0] === '#'){
            
            if ( value.length === 4 || value.length === 7) {
                inputValidOne = true;
            }
        }
        if(color[0] === '#'){
            
            if ( color.length === 4 || color.length === 7) {
                inputValidTwo = true;
            }
        }
        if (inputValidOne === true && inputValidTwo===true){
            diseble = true;
        }
    }

    valid();

    function add() {
        let gradient = `linear-gradient(45deg, ${value}, ${color})`;
        let newarr = [...list,{id: Math.random(), text:gradient}];
        setList(newarr);
        setValue('');
        setColor('');
        
    }

    function removeColor(id) {
       let newList = list.filter(item => item.id !== id);
       setList(newList);
    }
   
    return (
        <div>
            <input type="text"  onChange={(e)=>setValue(e.target.value)} value={value}/>
            <input type="text"  onChange={(e)=>setColor(e.target.value)} value={color}/>
            <button onClick={add} disabled={!diseble}> add gradient</button>
            <Item removeColor={removeColor} list={list} />
        </div>
    )
}

export default List;