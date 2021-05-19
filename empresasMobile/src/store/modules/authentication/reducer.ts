import { Reducer } from 'redux';
import produce from 'immer';
import {ActionTypes, IUserAuthenticated} from './types';
import { Alert } from 'react-native';

const INITIAL_STATE: IUserAuthenticated = {
    investor: undefined,
    access_token: "",
    client: "",
    uid: "",
    authenticated: false,
}

const cart: Reducer<IUserAuthenticated> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type){
            case ActionTypes.signInSuccess:{
                const { authenticatedUser } = action.payload;
                draft = authenticatedUser;
                console.log('Draft Result', draft);
                break;
            }

            case ActionTypes.signInFailure:{
                draft = INITIAL_STATE;
                Alert.alert("Ops, erro ao realizar login", "Parece que seu login ou senha estão incorretos, verifique e tente novamente.")
                console.log('Draft Result', draft);
                break;
            }
            default: {
                return draft;
            }
        }
    });
}

export default cart;
