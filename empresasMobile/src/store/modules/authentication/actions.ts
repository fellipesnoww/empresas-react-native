import { ILogin, ActionTypes, IUserAuthenticated, IUserAuthenticationError } from "../authentication/types";

export function signInRequest(login: ILogin){
  return {
    type: ActionTypes.signInRequest,
    payload: {
      login
    }
  }
}

export function signInSuccess(authenticatedUser: IUserAuthenticated){
  return {
    type: ActionTypes.signInSuccess,
    payload: {
      authenticatedUser
    }
  }
}

export function signInFailure(authenticationResponse: IUserAuthenticationError){
  return {
    type: ActionTypes.signInFailure,
    payload: {
      authenticationResponse
    }
  }
}
