import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebaseSetup";

const Some = ({someObj, isOwner}) => {
  const [editing, setEditing] = useState(false);
  const [newSome, setNewSome] = useState(someObj.text);
  
  const onDeleteClick = async() => {
    const ok = window.confirm("Are you sure you want to delete this text?");
    if(ok){
      const SomeTextRef = doc(dbService, "SoMe", `${someObj.id}`);
      await deleteDoc(SomeTextRef);
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    const SomeTextRef = doc(dbService, "SoMe", `${someObj.id}`);
    await updateDoc(SomeTextRef, {
      text:newSome
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {target:{value}} = event;
    setNewSome(value);
  };

  return(
    <div className="Some">
      {
      editing ? (
        <>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder="Edit your text" 
            value={newSome} 
            required 
            onChange = {onChange}
          />
          <input type="submit" value="Update" />
        </form>
        <button onClick={toggleEditing}>Cancel</button>
        </>
      ): (
        <>
          <h4>{someObj.text}</h4>
          <ul>
            {someObj.tags.map((tag,index) => (<li key={index}>#{tag}</li>))}
          </ul>
          {isOwner &&
          <>
          <button onClick={onDeleteClick}>Delete</button>
          <button onClick={toggleEditing}>Edit</button>
          </>}
        </>)
      }
    </div>
  );
};

export default Some;
