
const updateEmpApi = async (emp) => {
  try {
    let response = await fetch('http://10.13.42.239:3000/employees', {
      method: 'POST',
      headers: {
        'Authorization': 'ABCD',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emp)
    });
    let responseJson = await response.json();
    if (responseJson.message) throw new Error(responseJson.message);
    return responseJson;
  }
  catch (err) {
    // alert("ERR DEL: "+err);
    throw err;
  }
}

export default updateEmpApi;