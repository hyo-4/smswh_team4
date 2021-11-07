import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { dbService } from "../firebaseSetup";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Some from "./Some";
import './Feed.scss';


const Feed = ({ userObj }) => {
  const [feedText, setFeedText] = useState("");
  const [feedArray, setFeedArray] = useState([]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

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
      createdAt: Date.now(),
      creatorID: userObj.uid,
      creatorName: userObj.displayName,
      tags: tags
    };
    console.log(feedObj);
    await addDoc(collection(dbService, "SoMe"), feedObj);
    setFeedText("");
    setTags([]);
    //upload the text
  }

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    if (event.target.name === "feed") {
      setFeedText(value);
    }
    else if (event.target.name === "tag") {
      setTag(value);
    }
  }

  const addTag = () => {
    setTags([...tags, tag]);
    console.log(tags);
    setTag("");
  }

  return (
    <div>
      <form className='submit' onSubmit={onSubmit}>
        <div className="input1">
          <input className="n1" type="text" name="feed" value={feedText} placeholder="Write your text here!" maxLength={120} onChange={onChange} />
        </div>
        <input className="n2" type="submit" value="Upload" ></input>
        <input className="n3" type="text" name="tag" value={tag} placeholder="tag" onChange={onChange} />
        <input className="n4" type="button" value="add" onClick={addTag} />
        {tags.map((hashtag, index) => (
          <span key={index}> #{hashtag} </span>
        ))}

      </form>
      <div className="feed1">
        {feedArray.map(feed => (

          <Some
            key={feed.id}
            someObj={feed}
            isOwner={feed.creatorID === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
/**
<>
          <p key={feed.id}>{feed.text}</p>
          <ul>
            {feed.tags.map(tag => (<li>#{tag}</li>))}
          </ul>
          </>**/