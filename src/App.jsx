import React from 'react';
import { Provider } from 'react-redux';

import FunctionalComponent from '@/components/FunctionalComponent';
import ClassComponent from '@/components/ClassComponent';
import Clock from '@/components/Clock';
import CustomForm from '@/components/CustomForm';
import AddTodoComponent from '@/containers/AddTodo';
import VisibleTodoList from '@/containers/VisibleTodoList';
import Footer from '@/components/Footer';
import Toggle from '@/containers/Toggle';
import Calculator from '@/containers/Calculator';
import PostList from '@/containers/PostList';

import { store } from '@/store';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello, React Workspace!</h1>
      <FunctionalComponent name="Functional Component" />
      <ClassComponent name="Class Component" />
      <Clock />
      <CustomForm />
      <div>
        <AddTodoComponent />
        <VisibleTodoList />
        <Footer />
      </div>
      <Toggle />
      <Calculator />
      <PostList />
    </div>
  </Provider>
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
