import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { dbService } from "../firebaseSetup";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Feed = () => {
  const [feedText, setFeedText] = useState("");
  const [feedArray, setFeedArray] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(dbService, "SoMe"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const someArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })); 
      setFeedArray(someArr);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const feedObj = {
      text: feedText,
      createdAt: Date.now()
    };
    console.log(feedObj);
    await addDoc(collection(dbService,"SoMe"),feedObj);
    setFeedText("");
    //upload the text
  }
  
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setFeedText(value);
  }

  return (
    <div>
      <form onSubmit = {onSubmit}>
        <input type="text" value={feedText} placeholder="Write your text here!" maxLength={120} onChange={onChange}/>
        <input type="submit" value="Upload"/>
      </form>
      <div>
        {feedArray.map(feed => (
          <p key={feed.id}>{feed.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Feed;