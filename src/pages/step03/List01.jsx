function List01(props) {
  return (
    <>
        <div>
            <h3>강의 목록</h3>
            <Item02 />
            <ul>    
                <li> 과목 : SpringBoot 입문</li>  
                <li> 내용 : 자바 기반의 SpringBoot의 기본 지식을 배웁니다.</li>
            </ul>
            <ul>    
                <li> 과목 : React 입문</li>  
                <li> 내용 : React 기반의 기본지식을 배웁니다.</li>
            </ul>
        </div>
    </>
  );
}

export default List01;