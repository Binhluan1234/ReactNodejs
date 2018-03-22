
const removeEmpApi = async (emp) => {
  try {
    let response = await fetch('http://10.13.42.239:3000/employees', {
      method: 'DELETE',
      headers: {
        'Authorization': 'ABCD',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emp)
    });
    let responseJson = await response.json();
    return responseJson;
  }
  catch (err) {
    throw err;
  }
}

export default removeEmpApi;