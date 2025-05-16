import Items from "./Items";

export default function SomeEveryCheck(){
    const comments = [
        {name: "홍길동", comment: "방가방가", isAdmin: false},
        {name: "임꺽정", comment: "하이", isAdmin: true},  
        {name: "장길산", comment: "헬로우", isAdmin: false},
        {name: "일지매", comment: "안녕하세요", isAdmin: false},
    ];
    // some() : 배열의 요소 중 하나라도 조건을 만족하는 요소가 있으면 true (OR 와 같음)
    // every() : 배열의 모든 요소가 조건을 만족하면 true (AND 와 같음)
    // 보통 삼황 연산자와 같이 사용
    const result1 = comments.some(k=>k.isAdmin);
    const result2 = comments.every(k=>k.isAdmin);
    return (
        <>
            <h2>관리자 리스트</h2>
            <p>관리자 댓글 있냐? {result1 ? "있음" : "없음"}</p>
            <p>모두 관리자가 쓴 댓글이냐? {result2 ? "전부 관리자" : "일부만 관리자"}</p>
        </>
    )
};