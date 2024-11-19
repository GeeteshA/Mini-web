import React, { useEffect, useState } from 'react'
import StickyCard from './Card';

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [cards, setCards] = useState(()=>{
    const saveCards = localStorage.getItem("stickyNotes");
    return saveCards ? JSON.parse(saveCards) : [];
  });

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(cards));
  }, [cards]);


  const createHandler = (event) => {
    event.preventDefault();

    if (!title || !details) return; 

    const newCard = {
      id: Date.now(), 
      title,
      details,
      x: 0,
      y: 0
    };

    setCards([...cards, newCard]); 
    setTitle("");
    setDetails("");
  };

  const updateCardsPosition = (id, x, y) => {
    setCards(cards.map((card)=>
      card.id == id ? { ...card, x, y} : card
    ))  
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id)); 
  };

  return (
    <div>
      <div className="board">
        <div className="info">
          <h2 className='heading'>Sticky Notes</h2>
          <input 
            className='title'
            type="text" 
            placeholder='Enter Title'
            id='title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>

          <textarea 
            className='textarea'
            name="stickyinfo" 
            id="stickyinfo"
            placeholder='Your Text Here'
            rows="5"
            cols="36"
            value={details}
            onChange={(e)=>{setDetails(e.target.value)}}></textarea>

          <button 
            className='submit'
            onClick={createHandler} >Submit
            </button>
        </div>
        <div className="card">
        {cards.map((card) => (
            <StickyCard 
              key={card.id} 
              title={card.title} 
              details={card.details}
              onDelete={() => deleteCard(card.id)}
              onDrag={updateCardsPosition} />
          ))}
        </div>   
      </div>
    </div>
  )
}

export default App