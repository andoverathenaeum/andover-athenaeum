DEF_ARTICLE_IMAGE_WIDTH = "200px";
DEF_ARTICLE_PADDING_WIDTH = "10px";

$.urlParam = function(name){
    var results = new RegExp('[\?]' + name + '=([^#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

$.tag = function(meta, tag){
  var regex = new RegExp(`<${tag}>[^]*?<\/${tag}>`, 'g');
  try {
    return meta.match(regex).map(function(val){
      return $.trim(val
       .replace("<" + tag + ">",'')
       .replace("</" + tag + ">",''));
    });
  } catch {
    return [null];
  }
}

$.styling = function(meta, style){
  var regex = new RegExp(`${style}[^]*?;`, 'g');
  try {
    return meta.match(regex).map(function(val){
      return $.trim(val
       .replace(style + ":",'')
       .replace(";", ""));
    });
  } catch (e){
    return [null];
  }
}

$.imageTag = function(meta, baseUrl){
  var regex = new RegExp(`<Image[^]*?<\/Image>`, 'g');
  try {
    var res = meta;
    meta.match(regex).map(function(val){
      var caption = $.tag(val, 'Caption');
      var newVal = $.removeTag(val, 'Caption');
      var imageProps = newVal
                        .substring(0, newVal.indexOf('>'))
                        .replace("<Image", '')
                        .trim()
                        .replace(/ /g, ";")
      if (imageProps.length) { imageProps += ";"; }

      var spanProps = ""

      /* transfer float property to span and delete it from image */
      var float = $.styling(imageProps, "float")[0]
      if (float) {
        spanProps += "float:" + float + ";";
        imageProps = imageProps.replace("float:" + float + ";", "");
      } else {
        spanProps += "float:none;display:block;margin:auto;";
      }

      /* transfer width property to span */
      var width = $.styling(imageProps, "width")[0]
      if (width) {
        spanProps += "width:" + width + ";";
      } else {
        imageProps += "width:" + DEF_ARTICLE_IMAGE_WIDTH + ";";
      }

      /* transfer padding property to span */
      var padding = $.styling(imageProps, "padding")[0]
      if (padding) {
        spanProps += "padding:" + padding + ";";
        imageProps = imageProps.replace("padding:" + padding + ";", "");
      } else {
        spanProps += "padding:" + DEF_ARTICLE_PADDING_WIDTH + ";";
      }

      var imageSrc = baseUrl + newVal.substring(newVal.indexOf('>') + 1).replace("</Image>",'');
      res = res.replace(val, `<span class="in-text-image-span" style="${spanProps}"><img class="in-text-image" src="${imageSrc}" style="${imageProps}"/><span style="display: block;">${caption}</span></span>`)
    });
    return res;
  } catch (e) {
    console.log(e)
    return meta;
  }
}

$.removeTag = function(meta, tag, rwith){
  if (rwith === undefined) {
    rwith = '';
  }
  var regex = new RegExp(`<${tag}>[^]*?<\/${tag}>`, 'g');
  try {
    var res = meta;
    meta.match(regex).map(function(val){
      res = res.replace(val, rwith);
    });
    return res;
  } catch {
    return meta;
  }
}

$.replaceTag = function(meta, tag, start, close) {
  var r1 = new RegExp(`<${tag}>`, "g");
  var r2 = new RegExp(`</${tag}>`, "g");
  return meta.replace(r1, `<${start}>`).replace(r2, `</${close || start}>`)
}

var authorIdx = 0;

$.build = function(data, baseUrl) {
  var articleContainer = $('<div class="article-container"/>');
  $('<br/>').appendTo(articleContainer)

  if ($.tag(data, 'Section')[0]) {
    var sectionHeader = $('<h3 class="section-header"/>').html($.tag(data, 'Section')[0])
    sectionHeader.appendTo(articleContainer);
    // $('<br/>').appendTo(articleContainer);
    // $(`<div class="horiz-bar"/>`).appendTo(articleContainer);
    // $('<br/>').appendTo(articleContainer);
  }

  var blockHeader = $('<div class="block-header"></div>').append($('<h1 class="article-header"/>').html($.tag(data, 'Title')[0]));
  blockHeader.appendTo(articleContainer);
  $('<br/>').appendTo(articleContainer);

  var articleBody = $('<div class="founder-letter-content" />');

  var imageSidebar = $('<div class="image-sidebar"/>');
  var articleAuthorsTitle = $('<h3 style="font-size: 18px;" class="article-authors-title" />')

  var authorsTag = $.tag(data, 'Author');
  if (authorsTag.length > 1) {
    articleAuthorsTitle.html("Authors");
  } else if (authorsTag.length === 1 && authorsTag[0] !== null) {
    articleAuthorsTitle.html("Author");
  }
  articleAuthorsTitle.appendTo(imageSidebar);

  for (var i = 0; i < authorsTag.length; i++) {
    var current = authorsTag[i];
    var name = $.tag(current, "Name");
    var image = $.tag(current, "Image");
    var bio = $.tag(current, "Bio"); // opacity should be 0% for animation vvv
      $(`<div id=\"author${authorIdx+i}\" style=\"opacity: 100%;\">
          ${image[0] !== null ? `<img src=\"${baseUrl + image[0]}\" class="author-bubble"/>` : `<br/>`}
          ${name[0] !== null ? `<h4 style="margin-bottom: 5px;" class="author-name">${name[0]}</h4>` : `<br/>`}
          ${bio[0] !== null ? `<p style="text-align: center; width: 80%; margin: 5px 10% 15px 10%;">${bio[0]}</p>` : ``}
          <br/>
        </div>`).appendTo(imageSidebar);
  }

  imageSidebar.appendTo(articleBody);

  var columns = $.tag(data, 'Columns')[0] || 1;
  var p = $(`<p class="article-text" style="column-count: ${columns};"/>`);

  var bodyText = $.tag(data, 'Text')[0];

  bodyText = $.imageTag(bodyText, baseUrl);
  bodyText = $.replaceTag(bodyText, "h", "span class=\"bolded-h-para\"", "span");
  bodyText = $.replaceTag(bodyText, "c", "span class=\"centered\"", "span");
  bodyText = $.replaceTag(bodyText, "big", "span class=\"large-para\"", "span");
  bodyText = $.replaceTag(bodyText, "flex", "span style=\"display:flex\"", "span");

  p.html(bodyText);
  p.appendTo(articleBody);

  articleBody.appendTo(articleContainer);
  articleContainer.appendTo('#articles-container');

  // animate author images
  // for (var i = authorIdx; i < authorIdx + authorsTag.length; i++) {
  //   $(`#author${i}`).animate({
  //       'opacity': '1'
  //   }, 2500+i*1000);
  // }
  authorIdx += authorsTag.length;

  // animate article
  // authorIdx += 1;
}

// function getUrl(articleUrl, baseUrl) {
//   return $.ajax({
//     url: articleUrl,
//     type:'HEAD',
//     error: function()
//     {
//         // doesn't exist
//         $.build("<Title>Article Unavailable</Title><Text>Sorry, there was an error :(</Text>", "");
//     },
//     success: function(s)
//     {
//         //file exists
//         $.when( $.ajax(articleUrl) ).then(function( data, textStatus, jqXHR ) {
//           console.log("loaded " + desc)
//           $.build(data, baseUrl);
//         })
//     }
//   });
// }

$.default = function(a) {
  return a
}

$(document).ready(function() {
  var url = window.location.href;
  if (url.substr(-1) == '/') url = url.substr(0, url.length - 2);
  url = url.split('/');
  url.pop();
  // baseUrl = url.join('/') + "/articles/" + desc + "/";
  // var articleUrl = baseUrl + "article.txt";

  var descs = $.urlParam("desc").split('&');
  // console.log(descs)
  for (var idx = 0; idx < descs.length; idx++) {
    var desc = descs[idx];
    var baseUrl = url.join('/') + "/articles/" + desc + "/";
    var articleUrl = baseUrl + "article.txt";
    // console.log(idx)
    // console.log(articleUrl)
    // getUrl(articleUrl, baseUrl);
    $.when( $.ajax(articleUrl), $.default(baseUrl) ).done(function( q1, q2 ) {
      console.log("loading " + q2)
      $.build(q1[0], q2);
    }).fail(function() {
      $.build("<Title>Article Unavailable</Title><Text>Sorry, there was an error :(</Text>", "");
    })
  }

  var q = baseUrl;
  if (q.substr(-1) == '/') q = q.substr(0, q.length - 1);
  var arr = q.split('/')
  arr.splice(-2)
  var advertBase = arr.join('/') + "/advertisements/";
  var ls = advertBase + "list.txt";
  $.ajax({
    url: ls,
    type: 'HEAD',
    error: function()
    {
      console.log("Failed to load advertisements.")
    },
    success: function(s)
    {
      $.when( $.ajax(ls) ).then(function( data, textStatus, jqXHR ) {
        var images = data.split('\n').filter(i => i.length > 1)
        if (images.length > 0) {
          var box = $(`<div class="advert-box">`)
          var header = $(`<h3>Andover Athenaeum was brought to you by the following sponsors:</h3>`)
          header.appendTo('#articles-container')
          for (var i = 0; i < images.length; i++) {
            if (images[i].includes(' | ')) {
              $(`<a href="${images[i].split(" | ")[1]}" class="advert"><img src="${advertBase + images[i].split(" | ")[0]}"/></a>`).appendTo(box);
            } else {
              $(`<img src="${advertBase + images[i]}" class="advert"/>`).appendTo(box);
            }
          }
          box.appendTo('#articles-container');
          $('<br>').appendTo('#articles-container')
        }
      })
    }
  })
})
