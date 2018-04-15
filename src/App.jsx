import React from 'react';

import FunctionalComponent from '@/FunctionalComponent';
import ClassComponent from '@/ClassComponent';
import Clock from '@/Clock';
import Toggle from '@/Toggle';
import CustomForm from '@/CustomForm';
import Calculator from '@/Calculator';

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

export default App;
