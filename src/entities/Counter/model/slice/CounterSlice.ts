import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@/shared/lib/store';

import { CounterSchema } from '../types/counterSchema';

export interface CounterState {
    value: number;
}

const initialState: CounterSchema = {
    value: 0,
};
export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        multiply: (state, { payload }: PayloadAction<number>) => {
            state.value *= payload;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;
