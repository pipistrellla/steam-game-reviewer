import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { CounterSchema } from '@/entities/Counter';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    // scrollPosition: ScrollPositionSaveSchema;
    // rtk
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // ниже будут все асинхронные редусеры
    counter?: CounterSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    // функция возвращает стейт а не другие редусеры, поэтому нужно указывать в интерфейсе тип
    // combinedState<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

// enhancedStore - старндарный тип который аозвращается при создании стора
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    ReducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
