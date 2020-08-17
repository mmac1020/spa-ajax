/* CLIENT SIDE JS */

console.log('my JS is running');

const select = document.getElementById('dogSelect');
const button = document.getElementById('fetchButton');
const content = document.getElementById('content');

button.addEventListener('click', async function() {
  // get data i need to make request
  let dogId = select.value;
  let url = `/dogs/${dogId}`;

  // AJAX request for specific dog
  let response = await fetch(url, {
    method: 'GET'
  });
  console.log('response', response);
  let data = await response.json();
  console.log('data', data);
  // with the response, change the DOM
  content.innerHTML = `
    <h4>${data.name}</h4>
    <img src=${data.image} />
  `;
});
