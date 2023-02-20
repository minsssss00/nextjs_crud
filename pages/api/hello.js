// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let db = require('data/db.json');
let fs = require('fs');

export default function handler(req, res) {
  const {method,body} = req;
  
  const dataGet = () => {
    saveData();//List에 일기 작성
  }
  const dataUpdate = () => {
    let user = db.find(obj=>obj.id==body.id);
    Object.assign(user,body)//user,body와 겹쳐지는 값을 user에 덮어씌운다.
    saveData();
  }
  const dataDelete = () => {
    console.log(body);
    db = db.filter(obj=>obj.id != body);//string으로 넘어와서 !=로 써줘야함.
    saveData();

  }

  const dataCreate = () => {
    //post
    //push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
    // console.log(body);
    db.push(body);
    saveData();    
  }

  switch(method){
    case 'GET':
      dataGet();
      break; //데이터 조회
    case 'POST':
      dataCreate();
      break; //데이터 등록 및 전송
    case 'PUT':
      dataUpdate();
      break; //데이터 수정
    case 'DELETE':
      dataDelete();
      break; //데이터 삭제
  }


  function saveData(){
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db);
  }
}
