// import React,{ useState, useEffect } from 'react';
import './product.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';              // 7.4 useNavigate ์ถ๊ฐ!
//7.4
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/contants';
async function getProduct(id){
    // const response = await axios.get(`http://localhost:3000/product/${id}`);
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data;
}

const ProductPage = () => {
    //๐7.4 - useReducer()์ useAs
    const { id } = useParams();  // id๋ ๋ฐ์์์ผํจ!
    const [state] = useAsync(()=>getProduct(id),[id]);
    const { loading, data:product, error } = state; //data๋ผ๋ key์ ๋ด๊ธด ๊ฐ์ product๋ก ๋ฐ๊ฒ ๋ค!

    //์ญ์ ํจ์
    const navigate = useNavigate();                 // ์ญ์  ๋ฒํผ ๋๋ฅด๋ฉด ๋ค์ ๋ฉ์ธํ๋ฉด ์ค๊ฒ ํ๊ธฐ!
    const productDel = () => {
        // axios.delete(`http://localhost:3000/product/${id}`)
        axios.delete(`${API_URL}/product/${id}`)
        .then(result=>{
            console.log("์ญ์ ๋์์ต๋๋ค.");
            navigate("/");                          // ๋ฆฌ๋ค์ด๋ ์- ์ญ์  ๋ฒํผ ๋๋ฅด๋ฉด ๋ค์ ๋ฉ์ธํ๋ฉด ์ค๊ฒ ํ๊ธฐ!
        })
        .catch(e=>{
            console.log(e);
        })
    }
    if(loading) return <div>๋ก๋ฉ์ค์๋๋ค.....</div>;
    if(error) return <div>์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค.</div>;
    if(!product) return null;        //data ๊ฐ์ product๋ก ๋ฐ์์ !data ์ํด๋ ๋๊ณ !! -> !productํ๋ฉด ๋จ



    // ๐งกuseReducer()์ useEffect()๋ก ํ๊ฑฐ!
    // const [ product, setProduct ] = useState(null);
    // //useParams() ์คํ๋๋ฉด ํ๋ผ๋ฏธํฐ ๊ฐ์ ๊ฐ์ง๊ณ  ์๋ ๊ฐ์ฒด๋ฅผ ๋ฐํ
    // // -> url์ฃผ์์ฐฝ์ parameter๋ก..? ์ฃผ์์ฐฝ์ ์ ์ด์ฃผ๋ ๊ฐ๋ค์ด id์ ๋ด๊น
    // // ex> product/1 
    // // MainProduct.js์์ <Link to={`/product/${product.id}`}>  => ${product.id}์ด๊ฑฐ๋ฅผ const { id } = useParams(); ์๊ฐ ๋ฐ๊ฒ ๋ค!!!
    // const { id } = useParams();
    // //mount๋  ๋
    // useEffect(function(){
    //     axios.get(`http://localhost:3000/product/${id}`)
    //     .then(result=>{
    //         // console.log(result);            //์ฝ์์ฐฝ ๋ณด๋ฉด data์ ๊ฐ๋ค์ด ๋ด๊ฒจ์์(ex> data:    id: "3"   imgsrc: "images/products/product4.jpg"  name: "๊ฑฐ์ค์กฐ๋ช" price: 50000 seller: "yellow")
    //         const data = result.data;
    //         setProduct(data);
    //     })
    //     .catch(e=>{                     // ์๋ฌ ์ฒ๋ฆฌ
    //         console.log(e);             
    //     })
    // },[])                               //๋น๋ฐฐ์ดํด์ค์ผ ๋ง์ดํธ๋  ๋ ํ๋ฒ๋ง ๋จ!
    // if(!product) return <div>๋ก๋ฉ์ค์๋๋ค.......</div>          //product๊ฐ null์ด๋ฉด!
    return (
        <div className='inner'>
            <div id="image-box">
                {/* 7.4 ๐์ฌ๊ธฐ ์ ์ด์ค {product.~~}๋ค์ {data.~~}๋ก ๋ค ๋ณ๊ฒฝํ๊ธฐ ํ๋ค์ด์!! ์์ data:product๋ก ํด์ค์ ์๊ณ ์ณ๋๋จ!!!๐ */}
                <img src={product.imageUrl} alt="" />
                {/* ์ ๋๊ฒฝ๋ก๋ก images ์์๋ ์ฌ๋ฌ์(/)๋ฃ์ด์ค์ผ ์ด๋ฏธ์ง๊ฐ ๋ธ! */}
                {/* <img src="/images/products/product1.jpg" alt="" /> */}
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="/images/icons/avatar.png" alt=""/>
                            <span>{product.seller}</span>
                            {/* <span>๊ทธ๋ฆฐ</span> */}
                        </div>
                    </li>
                    <li>
                        {product.name}
                        {/* ์ ํ๋ช ์๋ก์ด ์กฐ๋ช */}
                    </li>
                    <li>
                        ๊ฐ๊ฒฉ {product.price}์
                        {/* ๊ฐ๊ฒฉ 50,000์ */}
                    </li>
                    <li>๋ฑ๋ก์ผ </li>
                    <li>์ํ์ค๋ช </li>
                    <li>{product.description}</li>
                </ul>
            </div>
            <div>
                <span onClick={productDel}>์ญ์ ํ๊ธฐ</span>
            </div>
        </div>
    );
};

export default ProductPage;