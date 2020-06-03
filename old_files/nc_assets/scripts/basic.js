async function makeRequest (method, extension) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, base + extension);
    xhr.onload = function () {
      if (this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

/*window.onload = async function() {
  if (false && sessionStorage.getItem("motto")) {
    document.getElementById("motto").textContent = sessionStorage.getItem("motto");
		document.getElementById("english").textContent = sessionStorage.getItem("english");
  } else {
	makeRequest('GET', 'nc_assets/static/quotes.json')
	.then((quotes) => {
		var json = JSON.parse(quotes);
		var idx = Math.floor(Math.random() * json.length);
		document.getElementById("motto").textContent = json[idx][0];
		document.getElementById("english").textContent = json[idx][1];
    // sessionStorage.setItem("motto", json[idx][0])
    // sessionStorage.setItem("english", json[idx][1])
	})
  }
}*/
