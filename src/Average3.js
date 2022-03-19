import React,{useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numberArr =>
{
    console.log('평균값 계산 중...');
    if(numberArr.length===0) return 0;
    let sum = numberArr.reduce((a,b)=>a+b);
    return sum / numberArr.length;
}


const Average3 = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);
    const count = useRef(0);

    const onChange = useCallback(e =>{
            setNumber(e.target.value);
        },[]);


    const onInsert = useCallback( e => {
        let newList = list.concat(parseInt(number));
        setList(newList);
        setNumber('');
        inputEl.current.focus();
        count.current++;        
        console.log('onInsert')
    },[list, number]);

    
    const resultAvg = useMemo( ()=>getAverage(list), [list] );

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>

            <p>{count.current}번째 숫자 등록완료</p>

            <ul>
                {list.map((item,idx) =>{
                    return(<li key={idx}>{item}</li>)
                })}
            </ul>
            <div>
                <b>평균값 : {resultAvg}</b>
            </div>

        </div>
    );
};

export default Average3;