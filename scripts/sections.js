$(document).ready(function() {
  var url = window.location.href;
  if (url.substr(-1) == '/') url = url.substr(0, url.length - 2);
  url = url.split('/');
  url.pop();
  var baseUrl = url.join('/') + "/articles/"
  url = baseUrl + "list.txt";

  $.when( $.ajax(url) ).done(function( data, textStatus, jqXHR ) {
    // console.log(data)
    var sectsplitarr = data.split('\n---\n')
    for (var i = 1; i < sectsplitarr.length; i++) {
      if (i % 2 == 0) {
        $(`<br>`).appendTo("#toc")
        var p = $('<p>');
        sectsplitarr[i].split("\n").forEach((j) => {
          var article = j.split(" :: ")[0]
          var link = j.split(" :: ")[1]

          $(`<a href="article.html?desc=${link}" class="section-link">`).html(article).appendTo(p)
          $(`<br>`).appendTo(p)
        })
        // console.log(sectsplitarr[i].split("\n"))
        p.appendTo("#toc");
        // $(`<p>`).html(sectsplitarr[i]).appendTo("#toc");
        $(`<br>`).appendTo("#toc")
      } else {
        $(`<br>`).appendTo("#toc")
        $(`<h3 class="section-header">`).html(sectsplitarr[i]).appendTo("#toc");
      }
    }
    // console.log(sectsplitarr)
    // $("#toc").html(data)
  }).fail(function() {
    console.log("failure")
  })

  // baseUrl = url.join('/') + "/articles/" + desc + "/";
  // var articleUrl = baseUrl + "article.txt";

  // var descs = $.urlParam("desc").split('&');
  // // console.log(descs)
  // for (var idx = 0; idx < descs.length; idx++) {
  //   var desc = descs[idx];
  //   var baseUrl = url.join('/') + "/articles/" + desc + "/";
  //   var articleUrl = baseUrl + "article.txt";
  //   // console.log(idx)
  //   // console.log(articleUrl)
  //   // getUrl(articleUrl, baseUrl);
  //   $.when( $.ajax(articleUrl), $.default(baseUrl) ).done(function( q1, q2 ) {
  //     console.log("loading " + q2)
  //     $.build(q1[0], q2);
  //   }).fail(function() {
  //     $.build("<Title>Article Unavailable</Title><Text>Sorry, there was an error :(</Text>", "");
  //   })
  // }
})
