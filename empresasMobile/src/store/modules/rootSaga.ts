import { all } from 'redux-saga/effects';
import authentication from './authentication/sagas';

export default function* rootSaga(): any {
  return yield all([authentication]);
}
