import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange= (e) =>{
          setInputValue(e.target.value);

  }

const handleAddItem = ()=>{

  
  if ( inputValue.trim() !=''){
    if(editIndex !==-1){

      const updatedItems = [...listItems];
      updatedItems[editIndex] =inputValue;
      setListItems(updatedItems);
      setEditIndex(-1);


    }

    else{
      setListItems([inputValue, ...listItems ]);
    }

    setInputValue('')
}
}


  const handleEditItem =(index) =>{

    setInputValue(listItems[index])
    setEditIndex(index)


  }


  const HandleDeleteItem =(index)=>{

    const updatedItems = [...listItems];
    updatedItems.splice(index, 1);
    setListItems(updatedItems);


  }





  return (
    <div  className='wrapper'>

      <div>

        <div className="header">Todo List</div>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className='addbtn' onClick={handleAddItem}> {editIndex === -1 ? 'Add' : 'Save'}</button>

      
      <div className='holdinglist'>
      <ul>
        {listItems.map((item, index) => (
          <li   className='todolis' key={index}>
            <div className='item'>
                {item}
            </div>
            
            <div  >

              
            <button className='editbtn' onClick={() => handleEditItem(index)}>Edit</button>
            

            <button  className='editbtn' onClick={() => HandleDeleteItem(index)}> delete</button>
            </div>
          </li>
        ))}



      </ul>

      </div>

      </div>
    </div>
  );
}

export default App;
