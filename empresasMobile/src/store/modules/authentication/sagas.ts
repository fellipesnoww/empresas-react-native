
import { AxiosResponse } from 'axios';
import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/api';
import { signInFailure, signInRequest, signInSuccess } from './actions';
import { ActionTypes, Investor, IUserAuthenticated } from './types';

type SignInUserRequest = ReturnType<typeof signInRequest>;

interface ILoginResponse{
    investor: Investor | null;
    enterprise: null;
    success: boolean;
    errors: string[];
}

function* signInUser({payload}: SignInUserRequest){
  try {

    const {login} = payload;

    const loginResponse:AxiosResponse<ILoginResponse> = yield call(api.post, `api/v1/users/auth/sign_in`, login);

    if(loginResponse?.data.success){
      const {uid, client} = loginResponse.headers;

      const authenticatedUser: IUserAuthenticated = {
        investor: loginResponse.data.investor,
        uid,
        client,
        access_token: loginResponse.headers["access-token"],
        success: loginResponse.data.success
      }
      yield put(signInSuccess(authenticatedUser));
    }
    else{
      yield put(signInFailure({errors: loginResponse.data.errors, success: loginResponse.data.success}));
    }

  } catch (error) {
      yield put(signInFailure({errors: ["Houveram erros ao realizar login"], success: false}));

  }
}

export default all([
    takeLatest(ActionTypes.signInRequest, signInUser)
]);
