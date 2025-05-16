
export default function ReduceComment() {
    // 배열 => 나중에는 DB가 될 수 있음
    const comments = [
        {name: "홍길동", comment: "방가방가", isAdmin: true},
        {name: "임꺽정", comment: "하이", isAdmin: false},
        {name: "장길산", comment: "헬로우", isAdmin: true},
        {name: "일지매", comment: "안녕하세요", isAdmin: true},
    ];

    // reduce() : 배열의 각 요소에 대해 주어진 함수를 호출하여 단일 값으로 축소
    // reduce()는 배열을 각 요소를 순회하면서 누적값을 계산하는 함수
    // 1회차 : k = {..., isAdmin: true}, / acc.total = 0 + 1 / adminCount = 0 + 1
    // 2회차 : k = {..., isAdmin: false}, / acc.total = 1 + 1 / isAdmin이 false이므로 adminCount는 그대로
    // 3회차 : k = {..., isAdmin: true}, / acc.total = 2 + 1 / adminCount = 1 + 1
    // 4회차 : k = {..., isAdmin: true}, / acc.total = 3 + 1 / adminCount = 2 + 1
    const admin = comments.reduce((acc, k)=>{
        // acc.total = acc.total + 1;
        acc.total += 1; // 순회 횟수 누적
         // 관리자 일 때만 댓글 수 누적
        if(comments.isAdmin){
            acc.adminCount += 1;
        }
        return acc ;
        },
        {total : 0, adminCount : 0}
    );
    return (
      <>
        <h2>관리자 리스트</h2>
        <p>전체 댓글 수 : {admin.total}</p>
        <p>관리자 댓글 수 : {admin.adminCount}</p>
      </>
    );
}