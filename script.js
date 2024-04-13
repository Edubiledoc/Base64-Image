function sendRequest() {
  const url = 'http://api.onenet.hk.chinamobile.com/devices/161318797/datastreams/16001084'; // Replace with your API endpoint
  const apiKey = 'jBJ57XKIxoGToSbWqa4anjF9MWs='; // Replace with your API key

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('api-key', apiKey);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    } else {
      console.error('Request failed. Status:', xhr.status);
    }
  };

  const requestData = { "api-key": 'jBJ57XKIxoGToSbWqa4anjF9MWs=' };
  xhr.send(JSON.stringify(requestData));
}