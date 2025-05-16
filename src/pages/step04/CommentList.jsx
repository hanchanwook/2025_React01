import Comment from './Comment';

// 배열 => 나중에는 DB가 될 수 있음
const comments = [
    {name: "홍길동", comment: "방가방가"},
    {name: "임꺽정", comment: "하이"},
    {name: "장길산", comment: "헬로우"},
    {name: "일지매", comment: "안녕하세요"},
];

export default function CommentList(props) {
    return (
      <>
        {
        comments.map((k)=>{
            return(
                 <Comment name={k.name} comment={k.comment} />
                  )
            })
        }
      </>
    );
}