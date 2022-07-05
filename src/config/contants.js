// 7.4
// 💙http://localhost:3000 이게 우리의 서버주소  --> 이거를 한번에 변경하기 위해서 API_URL로 다 바꿔주기!!!
// 주소를 한방에 바꿔주기위해서! API_URL 따로 만들어서 다 바꿔주기!
// http://localhost:3000 이렇게 적힌거 API_URL을 import 해주고, 다 백틱넣어서 바꿔주기!!!
// export const API_URL = "http://localhost:3000";

//7.5  heroku에서 open app하면 뜨는 주소!적어주기!!! 맨마지막 /슬러시는 빼자
export const API_URL = "https://greenlamp-shopping-server.herokuapp.com";
// <서버배포>
// 항목의 이미지들이 안뜸 -> 경로가 이상해서.. -> 서버배포 다시 올려야함
// 1. server-main 에서
// //7.5 헤로쿠에서 포트 지정하는게 있으면 그 번호를 사용
// //없으면 8080포트를 사용
// const port = process.env.PORT || 8080;   --> localhost:8080 쓰는 걸 heroku로 바꿔야함!!!
// --> 데이터베이스의 이미지경로도 수정해주기
// DB Browser for SQLite에서!! imageUrl 바꿔야함!!
// 2. http://localhost:3000/upload/product1.jpg
// -> https://greenlamp-shopping-server.herokuapp.com/upload/product1.jpg 이런식으로!! heroku주소로 
// 3. server-main에서 이미지 경로도 수정!
// //    res.send({
//         // imageUrl: file.path
//         //이미지 경로 수정!
//         // imageUrl: "http://localhost:3000/"+file.destination+file.filename   
//         // 💕7.5 heroku 주소로 변경
//         imageUrl: "https://greenlamp-shopping-server.herokuapp.com/"+file.destination+file.filename   