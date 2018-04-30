import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
    <BrowserRouter>
      <div>
        <h1>Hello, React Workspace!</h1>

        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/functional-component">Functional Component</Link>
        &nbsp;|&nbsp;
        <Link to="/class-component">Class Component</Link>
        &nbsp;|&nbsp;
        <Link to="/clock">Clock</Link>
        &nbsp;|&nbsp;
        <Link to="/custom-form">CustomForm</Link>
        &nbsp;|&nbsp;
        <Link to="/todo">Todo</Link>
        &nbsp;|&nbsp;
        <Link to="/toggle">Toggle</Link>
        &nbsp;|&nbsp;
        <Link to="/calculator">Calculator</Link>
        &nbsp;|&nbsp;
        <Link to="/post-list">PostList</Link>

        <hr />

        <Switch>
          <Route
            exact
            path="/functional-component"
            render={props =>
              <FunctionalComponent {...props} name="Functional Component" />}
          />

          <Route
            exact
            path="/class-component"
            render={props =>
              <ClassComponent {...props} name="Class Component" />}
          />


          <Route exact path="/clock" component={Clock} />

          <Route exact path="/custom-form" component={CustomForm} />

          <Route exact path="/todo">
            <div>
              <AddTodoComponent />
              <VisibleTodoList />
              <Footer />
            </div>
          </Route>

          <Route exact path="/toggle" component={Toggle} />

          <Route exact path="/calculator" component={Calculator} />

          <Route exact path="/post-list" component={PostList} />

          {/* when none of the above match, the following route will be rendered */}
          <Route>
            <h3>Select a demo component</h3>
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
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
