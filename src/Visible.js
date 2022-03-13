import React, {useState} from 'react';
import Info from './Info';

const Visible = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
        <button onClick={()=>{
            setVisible(!visible);
        }}>
            {visible ? 'HIDE' : 'SHOW'}
        </button>

        <hr />
        {visible && <Info />}
       
    </>
    );
};

export default Visible;