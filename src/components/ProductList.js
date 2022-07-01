// 쌤 블로그 자료 -> Main-index.js
// import React, { useState, useEffect } from 'react';
// import './index.scss';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// const MainPage = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         axios.get("https://3f7c5958-7267-47a3-8ec6-7cef1894ce1c.mock.pstmn.io/products/")
//             .then(function (result) {
//                 const products = result.data.products;
//                 console.log(result.data.products);
//                 setProducts(products);
//             }).catch(function (error) {
//                 console.log(error);
//             })

//     }, [])

//     return (
//         <div>
//             <div id="header">
//                 <div id="header-area">
//                     <img src="images/icons/logo.png" alt=""/>
//                 </div>
//             </div>
//             <div id="body">
//                 <div id="banner">
//                     <img src="images/banners/banner1.png" alt="" />
//                 </div>

//                 <div id="product-list">
//                     <h1>판매되는 상품들</h1>
//                     {
//                         products.map((product, index) => {
//                             return (
//                                 <div className="product-card">
//                                     <Link to={`/product/${index}`} className="product-link">
//                                         <div>
//                                             <img className="product-img" src={product.imageUrl} alt=""/>
//                                         </div>
//                                         <div className="product-contents">
//                                             <span className="product-name">
//                                                 {product.name}
//                                             </span>
//                                             <span className="product-price">
//                                                 {product.price}원
//                                             </span>
//                                             <div className="product-seller">
//                                                 <img className="product-avatar" src="images/icons/avatar.png" alt=""/>
//                                                 <span>{product.seller}</span>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </div>
//             <div id="footer"></div>
//         </div >
//     )
// }

// export default MainPage;




        


