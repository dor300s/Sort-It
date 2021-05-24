import React, { useEffect, useState } from 'react';
import { generateNumbers } from '../services/generateNumbersService';
import { SortType } from '../types/Sort';


export interface State {
    sortType: SortType;
    speed: number;
    size: number;
    isRunning: boolean;
    setIsRunning: Function;
    numbers: number[];
}

export const StateContext = React.createContext<any>([]);

export const StateProvider = (props: any) => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [state, setState] = useState<State>({ sortType: 'Bubble Sort', speed: 20, size: 40, isRunning, setIsRunning, numbers: generateNumbers(40) })

    useEffect(() => {
        setState((prev: State) => ({ ...prev, isRunning }))
    }, [isRunning])

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    )
}

