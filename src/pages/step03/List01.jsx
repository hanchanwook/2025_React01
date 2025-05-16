import Item02 from './Item02';

function List01(props) {
  return (
    <>
        <div>
            <h3>강의 목록</h3>
            <Item02 title="SpringBoot 입문" content="자바 기반의 SpringBoot의 기본 지식을 배웁니다." />
            <Item02 title="React 입문" content="React 기반의 기본지식을 배웁니다." />
        </div>
    </>
  );
}

export default List01;