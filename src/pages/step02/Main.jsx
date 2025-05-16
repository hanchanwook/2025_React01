import List01 from "../step03/List01";
import List02 from "../step03/List02";
import Profile from "../step03/Profile";
import CommentList from "../step04/CommentList";
import Counter from "./Counter";
import FilteredCommentList from "../step05/FilteredCommentList";
import FilteredCommentList2 from "../step05/FilteredCommentList2";
import FindAdminComment from "../step05/FindAdminComment";
import ReduceComment from "../step05/ReduceComment";
import IfExam01 from "../step06/IfExam01";
import IfExam02List from "../step06/IfExam02List";

function Main(props){
    return(
        // Counter 태그의 첫 글자가 소문자이면 일반적인 html 태그로 인식하며, 대문자이면 컴포넌트로 인식한다.
        // 따라서 Counter 태그의 첫 글자를 대문자로 작성해야 한다.  
        <main>
            <h1>WelCome React</h1>
            <Counter />  
            <List01 /> 
            <List02 /> 
            <Profile />
            <CommentList />
            <FilteredCommentList />
            <FilteredCommentList2 />
            <FindAdminComment />
            <ReduceComment />
            <IfExam01 />
            <IfExam02List />
            <TextList01 />
            <TextList02 />
            
        </main>
    );
};

export default Main;