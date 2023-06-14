
import './App.css';
import 'remixicon/fonts/remixicon.css'

import List from './Component/List';
import Alert from './Component/Alert';
import { useState } from 'react';

function App() {
    const {name, setname}= useState("");
    const {list, setlist}= useState({});
    const {isEditing, setisEditing}= useState("false");
    const {editId, seteditId}= useState("null");
    const {alert , setalert}= useState({ show:false , msg:"", type:""});

  return (
      <section className='section-center'>

       

      </section>

   );
}

export default App;
