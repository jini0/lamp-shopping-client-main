// import React, { useState, useEffect } from 'react';
import './index.scss';
// 6.30 API 서버 연결
// 💜lamp-shopping-server 폴더와 같이보자💜
import axios from 'axios';
// map()으로 연결해주려고 Link사용하기
// import { Link } from 'react-router-dom';
import MainProduct from './MainProduct';
// 7.4 - useAsync.js 만들고!!
import React from 'react';
import useAsync from '../customHook/useAsync';
async function getProducts(){
    const response = await axios.get("http://localhost:3000/products")
    return response.data;       //getProducts()가 실행되면 response.data 데이터가 리턴!
}

const MainPage = () => {
    //💛7.4 useReducer()를 이용해서 항목데이터 불러오기!!
    const [state, refetch] = useAsync(getProducts,[]);
    //state를 다시 구조분해할당!
    const { loading, data, error } = state;
    if(loading) return <div>로딩중......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중입니다.</div>




    // // 🧡6.30 (return전까지) useState()와 useEffect()를 이용해서 항목불러오기!
    // const [ products, setProducts ] = useState([]);          //초기값: 빈배열
    // //get방식으로 받을거다!
    // //한 번만 받을거라서 useEffect에 넣어줌!
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/products")      //🖤lamp-shopping-server에서 server.js 파일을 보자!!!🖤
    //     .then( result =>{                                //결과가 result에 담김 -> result는 객체임! products라는 배열에 객체가 담김
    //         // 7.1 lamp-shopping-server에서 server.js에서 데이터베이스 조회하고! 수정하기 
    //         const products = result.data;
    //         setProducts(products);
    //         console.log(products);

    //         // // setProducts(result.products);             //이렇게 해주면 안됨!!!!
    //         // // setProducts(result.data.products);        //이렇게 바로 담아주면 왜 빈배열이 나오지
    //         // const products = result.data.products;       //바로 담아주면 안되고..이걸 변수에 넣어서 setProducts(products);에 넣어주면 값이 뜸!
    //         // console.log(result.data.products);
    //         // setProducts(products);
    //         // console.log(products);
    //         // // console.log(result);                        //를 찍어보면 콘솔창에  data: {products: Array(2)}안에 값이 담김!  -> result.data.products  로 해줘야함!!! 
    //     }).catch(e => {
    //         console.log(e);
    //     })
    // },[])               //여기 [빈배열] 빠지면 계속 호출돼서 서버가 뻗음.....
    // if(products===[]) return <div>로딩중입니다.</div>           //products가 빈배열이면 로딩중을 반환!
    return (
        <div>
            <div id="main">
                <div id="banner">
                    {/* react는 img에 alt 속성이 없으면 계속 노란줄 뜸 */}
                    <img src="images/banners/banner1.png" alt="" />
                </div>
                <div id="product-list" className='inner'>
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {/* 7.4 쌤이랑 */}
                        {data.map(product=><MainProduct key={product.id} product={product} />)}

                        {/* 7.1 쌤이랑
                        {products.map(product=>(
                            <MainProduct key={product.id} product={product} />))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};
//                         3. (7.1) 쌤이랑 -> 이렇게 적어주고 MainProduct.js로 여기껄 넣어주고 위에는 메인프로덕트를 임포트!
//                         {/* {products.map(product=>(
//                             <div className="product-card">
//                                 <div className="product-img">
//                                     <img src={product.imgsrc} alt=""/>
//                                 </div>
//                                 <div className="product-contents">
//                                     <span className="product-name">{product.name}</span>
//                                     <span className="product-price">{product.price}원</span>
//                                     <div className="product-seller">
//                                         <img src="images/icons/avatar.png" alt=""/>{product.seller}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))} */}


//                         {/* 2. map()이용해서 하나만 만들고 넣어주기 - 내가 */}
//                         {/* lamp-shopping-server와 연동해서 const result = { products: [] } 안에 값들을 넣어주는거!!! */}
//                         {/* {
//                             products.map((product, index) => {
//                                 return (
//                                     <div className="product-card">
//                                         <>
//                                         <Link to={`/products/${index}`} className='product-img'>
//                                             <div>
//                                                 <img src={product.imgsrc} alt=""/>
//                                             </div>
//                                             <div className="product-contents">
//                                                 <span className="product-name">{product.name}</span>
//                                                 <span className="product-price">{product.price}원</span>
//                                                 <div className="product-seller">
//                                                     <img src="images/icons/avatar.png" alt=""/>
//                                                     <span>{product.seller}</span>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                         </>
//                                     </div>
//                                 )
//                             })
//                         } */}



//                         {/* 1. 일단 8개 넣어본거! */}
//                         {/* map으로 돌려서 8개항목 넣어줄거라 하나만 뼈대 만들어줘도 됨! */}
//                         {/* ul로 안묶더라도 묶어주고 싶어서! */}
//                         {/* <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-card">
//                             <div className='product-img'>
//                                 <img src="images/products/product1.jpg" alt="" /> 
//                             </div>
//                             <div className='product-contents'>
//                                 <span className='product-name'>제품명</span>
//                                 <span className='product-price'>가격</span>
//                                 <div className='product-seller'>
//                                     <img src="images/icons/avatar.png" alt="" />아무나
//                                 </div>
//                             </div>
//                         </div> */}
//                     {/* </div>
//                 </div>
//             </div>
//         </div>
//     );
// }; */}

export default MainPage;


// 6.30 서버 연결
// 하고나서  터미널에 npm start 해주면
// Something is already running on port 3000.                       //이미 3000번 돌고있어서 다른 거 쓸래?라는거임

// Would you like to run the app on another port instead? ... yes           ==> (Y/n)나오면 그냥 enter해주면 됨!!
// 이렇게 하면
// localhost:3001               //3001번이 됨!
