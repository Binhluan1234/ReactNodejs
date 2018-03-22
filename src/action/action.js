
import getDataApi from '../Api/getDataApi'
import addEmpApi from '../Api/addEmpApi'
import removeEmpApi from '../Api/removeEmpApi'
import updateEmpApi from '../Api/updateEmpApi' 

export function getData() {
  return async (dispatch) => {
    let responseJson = await getDataApi();
    return dispatch({
      type: "GETDATA",
      data: responseJson
    });
  }
}

export function addEmp(emp) {
  return async (dispatch) => {
    try {
      let responseJson = await addEmpApi(emp);
      return dispatch({
        type: "ADDDATA",
        data: responseJson
      });
    } catch(err) {
      return dispatch({
        type: "ADD_FAIL",
        error: err.message
      });
    }
  }
}

export function removeEmp(emp) {
  return async (dispatch) => {
    try {
      let responseJson = await removeEmpApi(emp);
      return dispatch({
        type: "REMOVEDATA",
        data: emp
      });
    } catch(err) {
      return dispatch({
        type: "DEL_FAIL",
        error: err.message
      });
    }
  }
}

export function updateEmp(emp) {
  return async (dispatch) => {
    try {
      let responseJson = await updateEmpApi(emp);
      alert(""+JSON.stringify(responseJson));
      return dispatch({
        type: "UPDATEDATA",
        data: emp
      });
    } catch(err) {
      return dispatch({
        type: "UPDATE_FAIL",
        error: err.message
      });
    }
  }
}