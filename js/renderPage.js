$(document).ready(function() {

  // Render errors
  $("#errorMessages").hide();
  if (errors.length > 0) {
    $("#errorMessages").append(errors);
    $("#errorMessages").show();
  }

  let headlinesBlurbs = "<li></li>";
  if (headlines !== undefined) {
    if (!headlines.length) {
        headlinesBlurbs = "<li>There are no headlines.</li>";
    } else {
      headlines.forEach(function(headline) {
        let lang = (headline.langCode !== undefined && headline.langCode !== "") ? headline.langCode : "en";
        let src = (headline.imageUrl !== undefined && headline.imageUrl !== "") ? headline.imageUrl : "./img/image-not-found.png";
        //let image = (headline.imageUrl !== undefined && headline.imageUrl !== "") ? fetchImage(headline.imageUrl) : "";
        let alt = (headline.imageAlt !== undefined && headline.imageAlt !== "") ? headline.imageAlt : "No image description available";
        let heading = (headline.title !== undefined) ? headline.title : "";
        let paragraph = (headline.text !== undefined) ? headline.text : "";
        let link = (headline.url !== undefined) ? headline.url : "";
        if (heading !== "" && paragraph !== "") {
          headlinesBlurbs += "<li lang=\"" + lang + "\">" +
                                "<article class=\"blurb-landscape\">" +
                                  "<div class=\"blurb-content\">" +
                                    renderImg(src, alt) +
                                    renderText(heading, paragraph) +
                                    renderLink(link, lang, heading, 'inside') +
                                    renderFadin() +
                                  "</div>" +
                                renderLink(link, lang, heading, 'outside') +
                                "</article>" +
                              "</li>";
        }
      });
    }
    $("#headlines-list").append(headlinesBlurbs);
    $("#headlines").show();
  }
});

let articleBlurbs = "<li></li>";
if (articles !== undefined) {
  if (!articles.length) {
    articleBlurbs = "<li>There are no articles.</li>";
  } else {
    articles.forEach(function(article, index) {
      let lang = (article.langCode !== undefined && article.langCode !== "") ? article.langCode : "en";
      let src = (article.imageUrl !== undefined && article.imageUrl !== "") ? article.imageUrl : "./img/image-not-found.png";
      let alt = (article.imageAlt !== undefined && article.imageAlt !== "") ? article.imageAlt : "No image description available";
      let heading = (article.title !== undefined) ? article.title : "";
      let paragraph = (article.text !== undefined) ? article.text : "";
      let link = (article.url !== undefined) ? article.url : "";
      if (heading !== "" && paragraph !== "") {
        articleBlurbs += (index === 0) ?  "<div class=\"row\">" : "";
        articleBlurbs += "<li lang=\"" + lang + "\" class=\"col-sm-6 col-md-4\">" +
                      "<article class=\"blurb-portrait\">" +
                        "<div class=\"blurb-content\">" +
                          renderImg(src, alt) +
                          renderText(heading, paragraph) +
                          renderFadin() +
                        "</div>" +
                        renderLink(link, lang, heading, 'outside') +
                      "</article>" +
                    "</li>";
        articleBlurbs += (index === articles.length-1) ? "</div>" : "";
      }
    });
  }
  $("#articles-list").append(articleBlurbs);
  $("#articles").show();
}
