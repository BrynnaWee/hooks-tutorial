import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers =>
{
    console.log('평균값 계산중');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a + b);
    return sum / numbers.length;
}


const Average2 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e=>{
        setNumber(e.target.value);
        console.log('onChange함수')
    },[]) //컴포넌트가 처음 렌더링 될 떄에만 실행

    const onInsert = useCallback(e=>{
        const nextList = list.concat(number);
        setList(nextList);
        setNumber('');
        console.log('onInsert함수')
    },[list, number]); // list, number값이 변경될 떄에만 실행

    const avg = useMemo(()=>getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>{list.map((item,idx)=>{
                return(
                    <li key={idx}>{item}</li>
                )
            })}</ul>
            <div>
                <b>평균값 : {avg}</b> 
            </div>
        </div>
    );
};

export default Average2;