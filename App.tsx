import React from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import EmployMe from './src/containers/EmployMe';
import reducers from './src/reducers';
import rootSaga from './src/sagas';

export default () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
  );

  sagaMiddleWare.run(rootSaga);

  return (
    <Provider store={store}>
      <EmployMe />
    </Provider>
  );
};
