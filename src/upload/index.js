import React,{ useState } from 'react';
import { Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
// https://ant.design/components/form/ 이런 design 형식을 적용시켜주는거!
// Divider는 hr같이 한 줄 띄우는거!
import 'antd/dist/antd.css';            // antdesign도 css 적용해줘야함!!
import './upload.scss';

// ✔ 파일이름이 index.js 인거고 컴포넌트 이름은 UploadPage임!!
const UploadPage = (props) => {
    //7.4 
    //이미지 경로 상태관리하기
    const [ imageUrl, setImageUrl ] = useState(null);
    //이미지 처리함수
    const onChangeImage = (info)=>{
        //파일이 업로드 중일때
        if(info.file.status === "uploading"){           //파일 불러올 때는 uploading이라는 상태(status)
            return;
        }
        //파일이 업로드 완료되었을때
        if(info.file.status === "done"){                //완료되면 status가 done으로 됨!
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            //받은 이미지경로를 imageUrl에 넣어줌
            setImageUrl(imageUrl);
        }
    }
    return (
        <div id="upload-container" className='inner'>
            <Form name="productUpload">
                <Form.Item name="imgUpload"
                    label={<div className='upload-label'>상품사진</div>}
                >
                    {/* 7.4 Upload 추가 */}
                    <Upload name="image" action="http://localhost:3000/image"
                    listType="picture" showUploadList={false} onChange={onChangeImage}>

                        {/* 업로드 이미지가 있으면 이미지를 나타내고,
                        업로드 이미지가 없으면 회색배경에 업로드 아이콘이 나타나도록 -> 삼항연산자로 해주기! 
                        jsx구문이니까 {중괄호}로 자바스크립트 써줌 */}
                        {/* { imageUrl ? <img src={`http://localhost:3000/${imageUrl}`}  이렇게 해줬다가 server에서 이미지 경로를 수정해서! 그냥 imageUrl만 넣어주면 됨        */}
                        { imageUrl ? <img src={imageUrl}
                        alt="" width="200px" height="200px" /> :
                            (<div id="upload-img-placeholder">
                                <img src="images/icons/camera.png" alt=""/>
                                <span>이미지를 업로드 해주세요.</span>
                            </div>)
                        }
                    </Upload>
                    {/* <div id="upload-img-placeholder">
                        <img src="images/icons/camera.png" alt=""/>
                        <span>이미지를 업로드 해주세요.</span>
                    </div> */}
                </Form.Item>
                <Divider/>
                <Form.Item name="seller"
                label={<div className='upload-label'>판매자명</div>}>
                    <Input className="nameUpload" size="large"
                    placeholder="판매자이름을 입력하세요" />
                </Form.Item>
                <Divider/>
                <Form.Item name="name"
                label={<div className='upload-label'>상품이름</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='상품이름을 입력해주세요'
                    />
                </Form.Item>
                <Divider/>
                <Form.Item name="price"
                label={<div  className='upload-label'>상품가격</div>}>
                    <InputNumber defaultValue={0} size="large" />
                </Form.Item>
                <Divider/>
                <Form.Item name="description"
                    label={<div className='upload-label'>상품소개</div>}
                    >
                    <Input.TextArea
                        size='large'
                        id="product-description"
                        maxLength={300}
                        placeholder="상품 소개를 적어주세요"
                    />
                </Form.Item>
                <Form.Item>
                    <Button id="submit-button" size="large" htmlType='submit'>
                        상품등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UploadPage;