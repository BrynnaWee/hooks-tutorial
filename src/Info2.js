import React, {useReducer} from 'react';

function reducer(state,action){
    return {
        ...state,
        [action.name] : action.value
    }
}

const Info = () => {

    const [state,dispatch] = useReducer(reducer, {nane:'', nickname:''});


    const onChange= e =>
    {
        dispatch(e.target);
    }

    return (


        <div>
            <div>
                <input name="name" value={state.name} onChange={onChange} />
                <input name="nickname" value={state.nickname} onChange={onChange} />
            </div>
            <div><b>이름 : </b>{state.name}</div>
            <div><b>닉네임 : </b>{state.nickname}</div>
        </div>
    );
};

export default Info;