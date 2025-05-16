export default function IfExam02(props) {    // 자식
    let name = props.name ;
    let result ;
    if (props.isPacked) {
        result = <li>name + 체크 O</li>
    } else {
        result = <li>name + 체크 X</li>
    }
    return (
        <>
            {result};
        </>
    );
}









// || 연산 (OR 연산)
// || 기준으로 왼쪽이 true이면 왼쪽을 반환하고, false이면 오른쪽을 반환한다.
/*
export default function IfExam02({name, isPacked}) {    // 자식
    return (
        <li> {name} {isPacked || "체크 O" }</li>
    )
}
*/

export default function IfExam02({name, isPacked}) {    // 자식
    const chk = "null";
    return (
        // chk에 값이 있으면 chk 를 return
        // chk에 값이 없으면 "체크 O" 를 return
        <li> {name} {chk || "체크 O" }</li>
    )
}


