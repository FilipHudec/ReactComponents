import React, {FC, type ReactNode} from 'react';

type SequenceProps = {
     first: number;
     step:number;
     count: number;
}

export const Sequence:FC<SequenceProps>  = ({first = 5, step = 5, count = 8}) => {
    

    const data: Array<ReactNode> = [];

    for(let i = 0; i <= count; i+=1) {
        data.push(<li>{first + i * step}</li>)
    }

    return (  
        <ul>
           {data}
        </ul>
    )

}