
var defaultState = {
  data: [],
  status: null,
  error: '',
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GETDATA':
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data,
        ],
        status: 'done'
      }

    case 'ADDDATA':
      // alert("State: " + JSON.stringify(action.data))
      return {
        ...state,
        data: [
          ...state.data,
          action.data,
        ],
        status: 'done'
      }

    case 'REMOVEDATA':
      alert("State: " + JSON.stringify(action.data))
      return {
        ...state,
        data: state.data.filter((emp) => emp !== action.data),
        status: 'done'
      }

    case 'UPDATEDATA':
      // alert("update: " + JSON.stringify(action.data))
      return {
        ...state,
        data: state.data.map((emp) => emp.id == action.data.id ? action.data : emp),
        status: 'done'
      }

    case 'ADD_FAIL':
      return {
        ...state,
        status: 'error',
        error: action.error,
      }

    case 'DEL_FAIL':
      return {
        ...state,
        status: 'error',
        error: action.error
      }

    case 'UPDATE_FAIL':
      return {
        ...state,
        status: 'error',
        error: action.error
      }

    default:
      return state;
  }
}

export default reducer;