import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../firebaseSetup";
import './Home.scss';

const Home = ({ userObj }) => {
  const [isChecked, setIsChecked] = useState([]);
  const [refArr, setRefArr] = useState([]);
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0]);
  const [tags, setTags] = useState([]);

  const art = ['kpop', 'music', 'drawing'];
  const sport = ['football', 'baseball', 'health'];
  const healing = ['travel', 'webtoon', 'game', 'photo'];
  const improvement = ['fashion', 'health', 'beauty'];
  const development = ['study', 'coding', 'reading'];
  const routine = ['love', 'beauty', 'fashion'];
  const list = ['예술', '스포츠', '여가', '자기 관리', '자기 개발', '일상'];

  useEffect(() => {
    const q = query(
      collection(dbService, "accounts"),
      where("creatorID", "==", userObj.uid)
    );
    onSnapshot(q, (snapshot) => {
      const tempArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRefArr(tempArr);
      if (tempArr[0] !== undefined) {
        valueCheck(tempArr);
        setTags(tempArr[0].type);
      }

    });
    checkTag();
    //console.log(refArr);
    //console.log(refArr[0].allArr);

    //console.log(value);
  }, []);

  useEffect(() => {
    if (refArr[0] !== undefined) {
      valueCheck(refArr);
      checkTag();
    }
    //console.log(value);
  }, [refArr]);

  const valueCheck = (tempArr) => {
    const temp = [0, 0, 0, 0, 0, 0];
    //console.log("temparr",tempArr[0].allArr);
    art.map((el) => {
      //console.log(el);
      if (tempArr[0].allArr.includes(el)) {
        temp[0]++;
      }
    });
    sport.map((el) => {
      //console.log(el);
      if (tempArr[0].allArr.includes(el)) {
        temp[1]++;
      }
    });
    healing.map((el) => {
      if (tempArr[0].allArr.includes(el)) {
        temp[2]++;
      }
    });
    improvement.map((el) => {
      if (tempArr[0].allArr.includes(el)) {
        temp[3]++;
      }
    });
    development.map((el) => {
      if (tempArr[0].allArr.includes(el)) {
        temp[4]++;
      }
    });
    routine.map((el) => {
      if (tempArr[0].allArr.includes(el)) {
        temp[5]++;
      }
    });
    setValue(temp);
    //console.log(value);
    checkTag();
  };

  const checkTag = async () => {
    const tag = [];
    for (let i = 0; i < 6; i++) {
      if (value[i] >= 2) {
        tag.push(list[i]);
      }
    }
    setTags(tag);
    if (refArr[0] !== undefined) {
      const textRef = doc(dbService, "accounts", `${refArr[0].id}`);
      await updateDoc(textRef, { type: tag });
    }

  };

  const onSubmit = async (event) => {
    event.preventDefault();
    //console.log(isChecked);
    checkTag();
    //console.log(refArr[0].id);
    const textRef = doc(dbService, "accounts", `${refArr[0].id}`);
    await updateDoc(textRef, {
      baseball: isChecked.includes('baseball'),
      football: isChecked.includes('football'),
      kpop: isChecked.includes('kpop'),
      music: isChecked.includes('music'),
      study: isChecked.includes('study'),
      drawing: isChecked.includes('drawing'),
      coding: isChecked.includes('coding'),
      reading: isChecked.includes('reading'),
      travel: isChecked.includes('travel'),
      webtoon: isChecked.includes('webtoon'),
      game: isChecked.includes('game'),
      beauty: isChecked.includes('beauty'),
      health: isChecked.includes('health'),
      photo: isChecked.includes('photo'),
      love: isChecked.includes('love'),
      fashion: isChecked.includes('fashion'),
      allArr: isChecked
    });
    const q = query(
      collection(dbService, "accounts"),
      where("creatorID", "==", userObj.uid)
    );
    onSnapshot(q, (snapshot) => {
      const tempArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRefArr(tempArr);
      //valueCheck(tempArr);
    });
    //const accRef = doc(dbService,"accounts",)
  };
  const onChange = (event) => {
    const {
      target: { checked, value }
    } = event;
    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((el) => el !== value));
    }
    //console.log(isChecked);
    //console.log(isChecked.includes('baseball'));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="text1">
          <input className="s1"
            type="checkbox"
            value="baseball"
            checked={isChecked.includes('baseball')}
            onChange={onChange}
          /> 야구
          <input className="s1"
            type="checkbox"
            value="football"
            checked={isChecked.includes("football")}
            onChange={onChange}
          /> 축구 <br />
          <input className="s1"
            type="checkbox"
            value="kpop"
            checked={isChecked.includes("kpop")}
            onChange={onChange}
          /> 연예
          <input className="s1"
            type="checkbox"
            value="music"
            checked={isChecked.includes("music")}
            onChange={onChange}
          /> 음악 <br />
          <input className="s1"
            type="checkbox"
            value="study"
            checked={isChecked.includes("study")}
            onChange={onChange}
          /> 공부
          <input className="s1"
            type="checkbox"
            value="drawing"
            checked={isChecked.includes("drawing")}
            onChange={onChange}
          /> 미술 <br />
          <input className="s1"
            type="checkbox"
            value="coding"
            checked={isChecked.includes("coding")}
            onChange={onChange}
          /> 개발
          <input className="s1"
            type="checkbox"
            value="reading"
            checked={isChecked.includes("reading")}
            onChange={onChange}
          /> 독서 <br />
          <input className="s1"
            type="checkbox"
            value="travel"
            checked={isChecked.includes("travel")}
            onChange={onChange}
          /> 여행
          <input className="s1"
            type="checkbox"
            value="webtoon"
            checked={isChecked.includes("webtoon")}
            onChange={onChange}
          /> 웹툰 <br />
          <input className="s1"
            type="checkbox"
            value="game"
            checked={isChecked.includes("game")}
            onChange={onChange}
          /> 게임
          <input className="s1"
            type="checkbox"
            value="beauty"
            checked={isChecked.includes("beauty")}
            onChange={onChange}
          /> 뷰티 <br />
          <input className="s1"
            type="checkbox"
            value="health"
            checked={isChecked.includes("health")}
            onChange={onChange}
          /> 헬스
          <input className="s1"
            type="checkbox"
            value="photo"
            checked={isChecked.includes("photo")}
            onChange={onChange}
          /> 사진 <br />
          <input className="s1"
            type="checkbox"
            value="love"
            checked={isChecked.includes("love")}
            onChange={onChange}
          /> 연애
          <input className="s1"
            type="checkbox"
            value="fashion"
            checked={isChecked.includes("fashion")}
            onChange={onChange}
          /> 패션 <br /></div>
        {tags.map((tag, index) => (
          <p key={index}><ul className="tag">{tag}</ul></p>
        )
        )}
        <input className='s2'
          type="submit" value="전송" />

      </form>
      <hr />
      <div className="result">
        {value.map((el, index) => (
          <p key={index}><ul className="list"> {list[index]}:{el}</ul></p>
        )
        )}


      </div>
    </div>
  );
};

export default Home;