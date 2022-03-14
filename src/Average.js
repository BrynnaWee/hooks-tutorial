import React,{useState, useMemo} from 'react';


const getAverage = numbers => {
    console.log('평균값 계산 중...');

    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
}


const Average = () => {

    const [list, setList ] = useState([]);
    const [number, setNumber] = useState('');


    const onChange = e => {       
        setNumber(e.target.value);
    }

    const onKeyDown = e => {
        if(e.keyCode !==13) return;
        onInsert();
    }

    const onInsert = e => {
        const nextList = list.concat( parseInt(number) );
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo( ()=> getAverage(list),[list] );

    return (
        <div>
            <input value={number} onChange={onChange} onKeyDown={onKeyDown} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value, idx) => {
                   return( <li key={idx}>{value}</li> )
                })}
            </ul>
            
            <div>
            {/* <p><b>1.평균값 :</b> {getAverage(list)}</p> */}
            <p><b>2.평균값 :</b> {avg}</p>

            </div>

        </div>
    );
};

export default Average;