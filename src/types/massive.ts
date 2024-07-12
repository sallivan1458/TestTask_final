import {IData} from "../data";

export interface IMassiveState {
    massive: IData[],
    loading: boolean,
    error: boolean | string
}

export enum MassiveActionTypes{
    FETCH_MASSIVE = 'FETCH_MASSIVE',
    FETCH_MASSIVE_SUCCESS = 'FETCH_MASSIVE_SUCCESS',
    FETCH_MASSIVE_ERROR = 'FETCH_MASSIVE_ERROR',
}

interface IFetchMassiveAction{
    type: MassiveActionTypes.FETCH_MASSIVE;
}
interface IFetchMassiveSucceedAction{
    type: MassiveActionTypes.FETCH_MASSIVE_SUCCESS;
    payload: IData[];
}
interface IFetchMassiveErrorAction{
    type: MassiveActionTypes.FETCH_MASSIVE_ERROR;
    payload: string;

}


export type MassiveAction =
    IFetchMassiveAction
    | IFetchMassiveSucceedAction
    | IFetchMassiveErrorAction
