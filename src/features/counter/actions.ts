import { action } from 'typesafe-actions';

import { ADD, INCREMENT } from './constants';

// CLASSIC API
// export const increment = () => action(INCREMENT);
// 不用 typesafe-actions 的原始写法
export const increment = () => {
    return { type: INCREMENT }
}

export const add = (amount: number) => action(ADD, amount);
