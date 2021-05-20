export enum ActionTypes{
  signInRequest = 'SIGN_IN_REQUEST',
  signInSuccess = 'SIGN_IN_SUCCESS',
  signInFailure = 'SIGN_IN_FAILURE',
  logout = 'LOGOUT_USER'
}

export interface ILogin{
  email: string;
  password: string;
}


export interface Investor{
  id: number;
  investor_name: string;
  email: string;
  city: string;
  country: string;
  balance: number;
  photo: string | null;
  portfolio: {
      enterprises_number: number;
      enterprises: []
  },
  portfolio_value: number;
  first_access: boolean;
  super_angel: boolean;
}

export interface IUserAuthenticationError{
  errors: string[];
  success: boolean;
}

export interface IUserAuthenticated{
  investor: Investor | null;
  uid: string;
  client: string;
  access_token: string;
  success: boolean;
}
