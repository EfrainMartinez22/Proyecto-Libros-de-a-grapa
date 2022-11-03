import React,{useState} from 'react'
import Card from './Card';
import axios from 'axios'
function Main() {
    const [search, setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            
        }
    }
  return (
    <header>
    <div className="header">
       <div className="row1">
            <h1>A room without a book is<br/>like a body without a soul </h1>
       </div>
        <div className="row2">
             <h2>Busca tu libro</h2>
             <div className="search">
                 <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyPress={searchBook}      placeholder='Ingresa el nombre del libro'/>
                 <button>Buscar</button>
             </div>
              <img src='../libros 3.png' />
        </div>
    </div>
       < div className="container">
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
         </div>
    </header>

  )
}

export default Main