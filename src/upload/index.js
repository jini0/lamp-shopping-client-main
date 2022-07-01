import React from 'react';
import { Form, Divider, Input, InputNumber, Button } from 'antd';
// https://ant.design/components/form/ 이런 design 형식을 적용시켜주는거!
// Divider는 hr같이 한 줄 띄우는거!
import 'antd/dist/antd.css';            // antdesign도 css 적용해줘야함!!
import './upload.scss';

// ✔ 파일이름이 index.js 인거고 컴포넌트 이름은 UploadPage임!!
const UploadPage = (props) => {
    return (
        <div id="upload-container" className='inner'>
            <Form name="productUpload">
                <Form.Item name="imgUpload"
                    label={<div className='upload-label'>상품사진</div>}
                >
                    <div id="upload-img-placeholder">
                        <img src="images/icons/camera.png" alt=""/>
                        <span>이미지를 업로드 해주세요.</span>
                    </div>
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