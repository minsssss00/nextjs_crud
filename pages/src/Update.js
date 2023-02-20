import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Update = () => {

  const router = useRouter();//next.js
  const { query } = router;

  const initial = {
    id: query.id,
    title: query.title,
    date: query.date,
    story: query.story
  };
  const [inputValue, setValue] = useState(initial);

  console.log(initial);

  useEffect(() => {
    setValue(initial);
  }, [])
  //input에 수정할 정보 끌어오기


  const valueChange = (e) => {
    setValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  const create = (e) => {
    e.preventDefault();
    axios.put('/api/hello', {
      ...inputValue,
      id: query.id
    });
    router.push('/');
  }
  return (
    <div className="outBox">
      <div className="Update">
        <Link href="/">홈이동</Link>
        <h2>오늘의 일기</h2>
        <form className="inputBox" onSubmit={create}>
          <p><input onChange={valueChange} value={inputValue.title} type={"text"} placeholder={"title"} name={"title"} className="title"/></p>
          <p><input onChange={valueChange} value={inputValue.date} type={"date"} placeholder={"date"} name={"date"} className="date"/></p>
          <p><textarea onChange={valueChange} value={inputValue.story} type={"text"} placeholder={"How was it today?"} name={"story"} className="story"/></p>
          <section className="btnBox">
          <button type={"submit"}>저장</button>
          <button>수정 취소</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Update;