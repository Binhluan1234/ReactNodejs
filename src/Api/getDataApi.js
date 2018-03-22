
const getDataApi = async () => {
  try {
    let response = await fetch('http://10.13.42.239:3000/employees/', {
      method: 'GET',
      headers: {
        'Authorization': 'ABCD',
      }
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {

  }
}
export default getDataApi;