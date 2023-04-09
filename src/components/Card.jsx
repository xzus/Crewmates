
import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client';

const Card = (props) =>  {
    const deleteMember = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Team')
        .delete()
        .eq('id', props.id); 
    
        window.location = "/gallery";
    }

  return (
      <div className="Card">
          <Link to={'update/'+ props.id}>Update</Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="powerLevel">{"Power Level: " + props.power_level}</h3>

          <button onClick={deleteMember}>Delete</button>
      </div>
  );
};

export default Card;