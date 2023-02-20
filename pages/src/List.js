import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export const List = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  async function dataGet() {
    let response = await axios.get('/api/hello')
    setData(response.data);
  }

  function dataDelete(id) {
    axios.delete('/api/hello', { data: id });
    dataGet()
  }

  useEffect(() => { dataGet() }, [])

  if (!data.length) return (
    <div className="nonDiary">
      <p>작성된 일기가 없습니다.</p>
      <Link href="/src/Edit">새 일기 추가하기</Link>
    </div>
  )

  return (
    <div className="List">
      <h2>일기 리스트</h2>
      <Link href="/src/Edit">새 일기</Link>
      <ul>
        {
          data.map(obj => (
            <li key={obj.id}>
              <p className="title">{obj.title}</p>
              <p className="date">{obj.date}</p>
              <p className="story">{obj.story}</p>
              <section>
                <button onClick={() => router.push({ pathname: 'src/Update', query: obj })}>수정</button>
                <button onClick={() => dataDelete(obj.id)}>삭제</button>
              </section>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
