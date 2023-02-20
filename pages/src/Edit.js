import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


const Edit = () => {

  const initial = { id: '', title: '', date: '', story: '' };
  const router = useRouter();//next.js
  const [inputValue, setValue] = useState(initial);

  const valueChange = (e) => {
    setValue((obj) => {
      return {
        ...obj,
        [e.target.name]: e.target.value
      }
    })
  }

  const create = (e) => {
    e.preventDefault();

    console.log(
      e.target.title.value,
      e.target.date.value,
      e.target.story.value,
    );

    axios.post('/api/hello', {
      ...inputValue, id: Date.now()
    });
    //데이터 등록 및 전송

    router.push('/');

  }
  return (
    <div className="outBox">
      <div className="Edit">
        <Link href="/">홈이동</Link>
        <h2>오늘의 일기</h2>
        <form className="inputBox" onSubmit={create}>
          <p><input onChange={valueChange} type={"text"} placeholder={"title"} name={"title"} className="title" /></p>
          <p><input onChange={valueChange} type={"date"} placeholder={"date"} name={"date"}
            className="date" /></p>
          <p><textarea onChange={valueChange} type={"text"} placeholder={"How was it today?"} name={"story"} className="story"/></p>
          <section className="btnBox">
            <button type={"submit"}>저장</button>
            <button>작성취소</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Edit;