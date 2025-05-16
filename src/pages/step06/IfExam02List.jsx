import IfExam02 from "./IfExam02";

export default function IfExam02List() {    // 부모모
    return (
        <>
            <h2>조건부 렌더링2(if)</h2>
            <ul>
                <IfExam02 isPacked={true} name="고길동" />    
                <IfExam02 isPacked={false} name="공실이" />
                <IfExam02 isPacked={true} name="둘리" />
                <IfExam02 isPacked={true} name="희동이" />

            </ul>
        </>
    );
}