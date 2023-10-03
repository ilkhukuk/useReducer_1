export const initialState = {
  isDarkMode: true,
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };

    case 'DELETE_TODO':
      const filtred = state.todos.filter((item) => item.id !== action.payload);
      return { todos: filtred };

    case 'CLEAR_TODOS':
      return initialState;

    default:
      return state;
  }
};
