const request = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos';
request.open('GET',url);
request.send();
request.onreadystatechange((e) => (document.getElementById('response').innerHTML = response.XMLHttpRequest));
