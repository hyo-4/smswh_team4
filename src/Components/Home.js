import React from "react";

const Home = ({userObj}) => {
  const [isChecked, setIsChecked] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="checkbox" value="야구"/> 야구 
        <input type="checkbox" value="축구"/> 축구 <br/>
        <input type="checkbox" value="연예"/> 연예 
        <input type="checkbox" value="음악"/> 음악 <br/>
        <input type="checkbox" value="공부"/> 공부 
        <input type="checkbox" value="미술"/> 미술 <br/>
        <input type="checkbox" value="개발"/> 개발 
        <input type="checkbox" value="독서"/> 독서 <br/>
        <input type="checkbox" value="여행"/> 여행 
        <input type="checkbox" value="웹툰"/> 웹툰 <br/>
        <input type="checkbox" value="게임"/> 게임 
        <input type="checkbox" value="뷰티"/> 뷰티 <br/>
        <input type="checkbox" value="헬스"/> 헬스 
        <input type="checkbox" value="사진"/> 사진 <br/>
        <input type="checkbox" value="연애"/> 연애 
        <input type="checkbox" value="패션"/> 패션 <br/>
        <input type="submit" value="전송" />
      </form>
    </div>
  );
};

export default Home;