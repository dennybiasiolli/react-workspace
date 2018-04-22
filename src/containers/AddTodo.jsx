import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '@/store/actions';

const MyAddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo((new Date()).getTime(), input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

MyAddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = connect()(MyAddTodo);

export default AddTodo;
