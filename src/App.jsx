import React from 'react';

import FunctionalComponent from '@/components/FunctionalComponent';
import ClassComponent from '@/components/ClassComponent';
import Clock from '@/components/Clock';
import Toggle from '@/components/Toggle';
import CustomForm from '@/components/CustomForm';
import Calculator from '@/components/Calculator';

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
