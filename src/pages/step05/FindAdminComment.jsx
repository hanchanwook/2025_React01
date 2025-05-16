import Items from "./Items";

export default function FindAdminComment(){
    const comments = [
        {name: "홍길동", comment: "방가방가", isAdmin: true},
        {name: "임꺽정", comment: "하이", isAdmin: false},  
        {name: "장길산", comment: "헬로우", isAdmin: true},
        {name: "일지매", comment: "안녕하세요", isAdmin: false},
    ];
    // filter() : 배열에서 조건에 맞는 요소만 추출하여 새로운 배열을 반환
    // map() : 배열의 각 요소에 대해 주어진 함수를 호출하여 새로운 배열을 반환
    // filter()와 map()을 함께 사용하여 조건에 맞는 요소를 변환

    // 지금은 isAdmin이 true인 것만 필터링
    //  find() : 배열에서 조건에 항목 하나만을 추출
    const filtered = comments.filter(k=>!k.isAdmin);
    return (
        <>
            <h2>관리자 리스트트</h2>
            {filtered.map((k,i) => {
                return (
                    <Items key={i} name={k.name} comment={k.comment} isAdmin={k.isAdmin} />
                    )   
                })}
        
        </>
    )
};