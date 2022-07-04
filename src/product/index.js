// import React,{ useState, useEffect } from 'react';
import './product.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';              // 7.4 useNavigate 추가!
//7.4
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/contants';
async function getProduct(id){
    // const response = await axios.get(`http://localhost:3000/product/${id}`);
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data;
}

const ProductPage = () => {
    //💛7.4 - useReducer()와 useAs
    const { id } = useParams();  // id는 받아와야함!
    const [state] = useAsync(()=>getProduct(id),[id]);
    const { loading, data:product, error } = state; //data라는 key에 담긴 값을 product로 받겠다!

    //삭제함수
    const navigate = useNavigate();                 // 삭제 버튼 누르면 다시 메인화면 오게 하기!
    const productDel = () => {
        // axios.delete(`http://localhost:3000/product/${id}`)
        axios.delete(`${API_URL}/product/${id}`)
        .then(result=>{
            console.log("삭제되었습니다.");
            navigate("/");                          // 리다이렉션- 삭제 버튼 누르면 다시 메인화면 오게 하기!
        })
        .catch(e=>{
            console.log(e);
        })
    }
    if(loading) return <div>로딩중입니다.....</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!product) return null;        //data 값을 product로 받아서 !data 안해도 되고!! -> !product하면 됨



    // 🧡useReducer()와 useEffect()로 한거!
    // const [ product, setProduct ] = useState(null);
    // //useParams() 실행되면 파라미터 값을 가지고 있는 객체를 반환
    // // -> url주소창에 parameter로..? 주소창에 적어주는 값들이 id에 담김
    // // ex> product/1 
    // // MainProduct.js에서 <Link to={`/product/${product.id}`}>  => ${product.id}이거를 const { id } = useParams(); 얘가 받겠다!!!
    // const { id } = useParams();
    // //mount될 때
    // useEffect(function(){
    //     axios.get(`http://localhost:3000/product/${id}`)
    //     .then(result=>{
    //         // console.log(result);            //콘솔창 보면 data에 값들이 담겨있음(ex> data:    id: "3"   imgsrc: "images/products/product4.jpg"  name: "거실조명" price: 50000 seller: "yellow")
    //         const data = result.data;
    //         setProduct(data);
    //     })
    //     .catch(e=>{                     // 에러 처리
    //         console.log(e);             
    //     })
    // },[])                               //빈배열해줘야 마운트될 때 한번만 됨!
    // if(!product) return <div>로딩중입니다.......</div>          //product가 null이면!
    return (
        <div className='inner'>
            <div id="image-box">
                {/* 7.4 💛여기 적어준 {product.~~}들을 {data.~~}로 다 변경하기 힘들어서!! 위에 data:product로 해줘서 안고쳐도됨!!!💛 */}
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
                    <li>등록일 </li>
                    <li>상품설명 </li>
                    <li>{product.description}</li>
                </ul>
            </div>
            <div>
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    );
};

export default ProductPage;