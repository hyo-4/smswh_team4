
import React, { useState, useEffect } from "react";
import { dbService } from "../firebaseSetup";
import { where, collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Some from "./Some";
import './FeedSearch.scss';


const SearchFeed = ({ userObj }) => {
  const [searchTag, setSearchTag] = useState("");
  const [resultArr, setResultArr] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, "SoMe")
    );
    onSnapshot(q, (snapshot) => {
      const someArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResultArr(someArr);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const q = query(
      collection(dbService, "SoMe"),
      where("tags", "array-contains", searchTag)
    );
    onSnapshot(q, (snapshot) => {
      const someArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResultArr(someArr);
    });
    setSearchTag("");

    //upload the text
  }

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTag(value);

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="Search" type="text" value={searchTag} placeholder="Search the Tag" onChange={onChange} />
        <input className="Search1" type="submit" value="Search" />

      </form>
      <div>
        {resultArr.map(some => (

          <Some
            key={some.id}
            someObj={some}
            isOwner={some.creatorID === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;
/**
<>
          <p key={feed.id}>{feed.text}</p>
          <ul>
            {feed.tags.map(tag => (<li>#{tag}</li>))}
          </ul>
          </>**/