// alert("Hello from your Chrome extension!");

let div = document.createElement("div");
let image = chrome.extension.getURL('img/mohawk.jpg');
div.innerHTML = `
  <div id="mohwak">
    <img id="mohawk-image" src=${image} />
  </div>
`;
document.body.appendChild(div);

const quotesURL = chrome.runtime.getURL('quotes.json');
  var quotes;
  fetch(quotesURL).then((response) => response.json())
    .then((json) => {
      quotes = json;
    })
    .catch((error) => console.log(error, error.message));
