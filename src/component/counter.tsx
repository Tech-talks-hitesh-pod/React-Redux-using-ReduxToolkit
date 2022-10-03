import React, {useState} from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks'

import { decrement, increment, incrementByAmount, selectCount, decrementByAmount, incrementAsync } from '../store/counter/counterSlice'

export function Counter(){
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [changeAmount, setIncrementAmount] = useState('1');

    return (
        <>
        <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                    <span > {count} </span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                </div>
                <div>
                    <input
                        aria-label="Set increment amount"
                        value={changeAmount}
                        onChange={e => setIncrementAmount(e.target.value)} />
                    <button
                        onClick={() => dispatch(incrementByAmount(Number(changeAmount) || 0))}
                    >
                        Deposit Amount
                    </button>
                    <button
                        onClick={() => dispatch(decrementByAmount(Number(changeAmount) || 0))}
                    >
                        Withdraw Amount
                    </button>
                    <button
                        onClick={() => dispatch(incrementAsync(Number(changeAmount) || 0))}
                    >
                        Deposit Async
                    </button>
                </div>
            </div></>
      );
}
