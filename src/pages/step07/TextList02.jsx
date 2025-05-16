export default function TextList02() {
        const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    /* 전체 보기
    const result = people.map((k)=>{
        return <li key={k.id}> {k.name}(k.profession) </li>
    });
    */


   // filter 를 사용해서 profession 이 'chemist' 인 사람만 보기
    const chemist = people.filter((k)=>{
        return k.profession === 'chemist';
    }); 

    // filter 는 반드시 map으로 마무리 하자자 
    const result = chemist.map((k)=>{
        return <li key={k.id}> {k.name}({k.profession}) </li>
    });

       // filter 를 사용해서 profession 이 'chemist' 인 사람만 보기
    const chemist = people.filter((k)=>{
        return k.profession === 'chemist';
    }); 

    // filter 는 반드시 map으로 마무리 하자자 
    const result = chemist.map((k)=>{
        return <li key={k.id}> {k.name}({k.profession}) </li>
    });

    return (
        <ul>
            {result}     
        </ul>
    );


}