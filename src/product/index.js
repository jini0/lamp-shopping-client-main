import React,{ useState, useEffect } from 'react';
import './product.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const [ product, setProduct ] = useState(null);
    //useParams() 실행되면 파라미터 값을 가지고 있는 객체를 반환
    // -> url주소창에 parameter로..? 주소창에 적어주는 값들이 id에 담김
    // ex> product/1 
    // MainProduct.js에서 <Link to={`/product/${product.id}`}>  => ${product.id}이거를 const { id } = useParams(); 얘가 받겠다!!!
    const { id } = useParams();
    //mount될 때
    useEffect(function(){
        axios.get(`http://localhost:3000/product/${id}`)
        .then(result=>{
            // console.log(result);            //콘솔창 보면 data에 값들이 담겨있음(ex> data:    id: "3"   imgsrc: "images/products/product4.jpg"  name: "거실조명" price: 50000 seller: "yellow")
            const data = result.data;
            setProduct(data);
        })
        .catch(e=>{                     // 에러 처리
            console.log(e);             
        })
    },[])                               //빈배열해줘야 마운트될 때 한번만 됨!
    if(!product) return <div>로딩중입니다.......</div>          //product가 null이면!
    return (
        <div className='inner'>
            <div id="image-box">
                <img src={product.imageUrl} alt="" />
                {/* 절대경로로 images 앞에도 슬러시(/)넣어줘야 이미지가 뜸! */}
                {/* <img src="/images/products/product1.jpg" alt="" /> */}
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="/images/icons/avatar.png" alt=""/>
                            <span>{product.seller}</span>
                            {/* <span>그린</span> */}
                        </div>
                    </li>
                    <li>
                        {product.name}
                        {/* 제품명 새로운 조명 */}
                    </li>
                    <li>
                        가격 {product.price}원
                        {/* 가격 50,000원 */}
                    </li>
                    <li>등록일 2022년 6월 2일</li>
                    <li>상품설명 </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;