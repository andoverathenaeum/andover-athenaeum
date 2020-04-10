var base = "https://andoverathenaeum.com/" // for production
// var base = "file:///Users/nakul/Documents/School/Andover%20Athenaeum.nosync/andover-athenaeum/" // for dev

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

function urlExists(extension) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', base + extension, false);
    xhr.send();
    return xhr.status != 404;
}

window.onload = async function() {
	// get quote of the day
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

	//load articles
	var articles_str = await makeRequest('GET', 'nc_assets/articles/current_articles.txt');
	var articles = articles_str.split('\n').filter((n) => n !== "");
  // console.log(articles);
	var divs = await Promise.all(articles.map(async (article) => {
		var div = document.createElement("DIV");
    div.classList.add("article");
		var h2 = document.createElement("H2");
		var h4 = document.createElement("H2");
		var p = document.createElement("P");
    var caption = ""
		await makeRequest('GET', 'nc_assets/articles/' + article + 'article.txt')
		 .then((full_text) => {
       // console.log(full_text)
			 var splitted = full_text.split("\n");
			 var title = splitted[0].slice(7);
			 var author = splitted[1].slice(8);
       var date = splitted[2].slice(6);
       caption = splitted[3].slice(9);
			 var text = splitted.slice(6).join("\n");
			 h2.textContent = title;
			 h2.classList.add("title");
			 div.appendChild(h2);
			 h4.textContent = " - " + author + " - ";
			 h4.classList.add("author");
			 div.appendChild(h4);
			 p.textContent = text;
       p.classList.add("article-text");
			 div.appendChild(p);
		 })

    await makeRequest('GET', 'nc_assets/articles/' + article + 'cover.jpg')
     .then((img) => {
       var div_img = document.createElement("DIV");
   		 var div_capt = document.createElement("DIV");
   		 var img = document.createElement("IMG");
       div_img.classList.add("img-caption");
       img.src = 'nc_assets/articles/' + article + "cover.jpg";
       div_img.appendChild(img);
       div_capt.textContent = caption;
       div_img.appendChild(div_capt);
       div.insertBefore(div_img, p);
     })
     .catch((e) => {})

		// document.getElementById("content-panel").appendChild(div);
    return div
	}))

  // console.log(divs)
  divs.forEach((div) => document.getElementById("content-panel").appendChild(div))

  var truncationEl = document.getElementsByClassName("article-text")[0];
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
