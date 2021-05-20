import { Reducer } from 'redux';
import produce from 'immer';
import {ActionTypes, IUserAuthenticated} from './types';
import { Alert } from 'react-native';

const INITIAL_STATE: IUserAuthenticated = {
    investor: null,
    access_token: "",
    client: "",
    uid: "",
    success: false
}

const authentication: Reducer<IUserAuthenticated> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type){
            case ActionTypes.signInSuccess:{
                const { authenticatedUser } = action.payload;

                Object.assign(draft, {
                  investor: authenticatedUser.investor,
                  access_token: authenticatedUser.access_token,
                  client: authenticatedUser.client,
                  uid: authenticatedUser.uid,
                  success: authenticatedUser.success
                });

                break;
            }

            case ActionTypes.signInFailure:{
                draft = INITIAL_STATE;
                Alert.alert("Ops, erro ao realizar login", "Parece que seu login ou senha estão incorretos, verifique e tente novamente.")
                break;
            }

            case ActionTypes.logout: {
              const { logout } = action.payload;

              Object.assign(draft, {
                investor: INITIAL_STATE.investor,
                access_token: INITIAL_STATE.access_token,
                client: INITIAL_STATE.client,
                uid: INITIAL_STATE.uid,
                success: !logout
              });

              break;
            }

            default: {
                return draft;
            }
        }
    });
}

export default authentication;
