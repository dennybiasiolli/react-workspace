import React from 'react';

import FunctionalComponent from '@/components/FunctionalComponent';
import ClassComponent from '@/components/ClassComponent';
import Clock from '@/components/Clock';
import Toggle from '@/components/Toggle';
import CustomForm from '@/components/CustomForm';
import Calculator from '@/components/Calculator';

import { store } from '@/store';

const App = () => (
  <div>
    <h1>Hello, React Workspace!</h1>
    <FunctionalComponent name="Functional Component" />
    <ClassComponent name="Class Component" />
    <Clock />
    <Toggle />
    <CustomForm />
    <Calculator />
  </div>
);


// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1


export default App;
