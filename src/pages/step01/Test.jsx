
function NumberCount(props) {
    let cnt = 5;
    let increment = () => {
        cnt = cnt + 1;
        console.log("cnt : ", cnt);

    }

    return(
     
        <>
            {/* html처럼 보이는 JSX안에서 JavaScript 코드나 변수를 사용하려면 {} 넣어야한다.*/}
            {/* 1. 변수 출력    2. 연산식   3. 조건문(삼황연산자), 4. 함수 호출중 */}
            <button onClick={increment}// 보통 자바스크립트 함수가 들어간다.
            // 스타일은 반드시 블록({})이 2개 사용해야한다.
            style={{ margin:"0 20px", fontSize:"20px"}}> + </button>     
            <span> {cnt} </span>
            <button> - </button>
        </>
    );
}


export default NumberCount;