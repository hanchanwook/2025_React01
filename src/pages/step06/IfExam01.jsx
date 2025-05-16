export default function IfExam01() {
//   Boolean(false);      // false
//   Boolean(0);          // false
//   Boolean(-0);         // false
//   Boolean("");         // false (빈 문자열)
//   Boolean(null);       // false
//   Boolean(undefined);  // false
//   Boolean(NaN);        // false
//   "Tom"   || "이름 없음"  // → "Tom"
    const isLoggedIn = true;
    // let은 변수이다. 값을 변경할 수 있다.
    let result; // const를 사용하면 에러 발생하는 이유 : result는 조건에 따라 값이 바뀌기 때문
    if (isLoggedIn) {
        result = <h2>XXX님 환영 합니다.</h2>
    } else {
        result = <h2>로그인 해 주세요.</h2>
    }
    return(
        <>  
            <h2> 조건 렌더링(if문)</h2>
            {result}
        </>
    )
}