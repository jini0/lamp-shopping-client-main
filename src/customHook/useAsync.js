//7.4 쌤이랑 - useReducer()로 하기!!!!  https://junhokims.tistory.com/88
import { useReducer, useEffect } from "react"

//초기값
const initialState = {
    loading: false,
    data: null,
    error: null
}
//reducer함수
// 로딩중 / 데이터 받기 성공 / 데이터 받기 실패 - 3가지 경우 만들거!(3개의 상태값 관리할거임!!!)
// LOADING / SUCCESS / ERROR    - 타입 3개 만들거
function reducer(state, action){
    switch(action.type){
        case "LOADING":
        return {
            loading: true,
            data: null,
            error: null
        };
        case "SUCCESS":
        return {
            loading: false,      //loading 이미 끝남!
            data: action.data,
            error: null
        };
        case "ERROR":
        return {
            loading: false,
            data: null,
            error: action.error
        };
        default:
        return state;
    }
}
function useAsync(callback, deps=[]){
                //callback과 deps=빈배열 받아옴
    const [ state, dispatch] = useReducer(reducer, initialState);
    const fetchData = async () => {
        dispatch({type:"LOADING"});
        try {
            const data = await callback();
            dispatch({
                type: "SUCCESS",
                data: data
            })
        }
        catch(e){
            dispatch({
                type: "ERROR",
                error: e
            })
        }
    }
    useEffect(()=>{
        fetchData();
    }, deps);
    return [state, fetchData];          // 위에 적힌 { loading: false, data: null, error: action.error } 이런 객체가 return되는거!!
}
export default useAsync

//비동기 promise구문
// async 비동기함수를 작성해줌(promise를 반환해주는!) -> 함수 앞에 꼭 띄워서 쓴다!!!(띄어쓰기 중요!)
// await이 있으면 단계적으로 실행이 가능함
// - callback()함수가 실행될 때까지 기다렸다가! 변수 data에 담기는거!