import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Some from "./Some";
import { dbService } from "../firebaseSetup";
import {render} from "react-dom";

const Search = ({userObj}) => {
  const [searchTag,SetSearchTag] = useState("");
  const [resultSome, setResultSome] = useState([]);

  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    SetSearchTag(value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(searchTag);
    setResultSome([]);
    const q = query(
      collection(dbService, "SoMe"),
      orderBy("createdAt", "desc")/** ,
      where("tags","array-contains",{searchTag})*/
    );
    onSnapshot(q, (snapshot) => {
      const someArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResultSome(someArr);
    });
    console.log(resultSome);
    SetSearchTag("");
  }
  useEffect(() => {
    render(
      <>
      {resultSome.map( some => {
        <Some someObj={some} isOwner={some.creatorID===userObj.uid} />
      })}</>,
      document.getElementById('SoMe')
    );
    console.log(resultSome);
  },[resultSome]);

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input 
          type="text" 
          value={searchTag} 
          placeholder="What tag do you want to search?"
          onChange={onChange}
        />
        <input type="submit" value="Search"/>
      </form>
      <p>Result</p>

      {resultSome.map( some => {
        <Some someObj={some} isOwner={some.creatorID===userObj.uid} />
      })}
      <div id="SoMe"></div>
    </div>
  );
}
export default Search;