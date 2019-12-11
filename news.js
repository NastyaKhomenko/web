console.log(1);

document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];

    window.addEventListener("online", function (event) {
        provider.get("news", (news) => {
            if (news) {
                allNews = news;
            }
            sendNewsToServer(allNews);
            showAllNews(allNews);
            provider.remove("news");
            allNews = [];
        });
    });

    provider.get("news", (news) => {
        if (news) {
            allNews = news;
        }
    });
    if (isOnline()) {
        sendNewsToServer(allNews);
        showAllNews(allNews);
        provider.remove("news");
        allNews = [];
    }


function addNews(imgSrc, title, body) {

    const divElem1 = document.createElement("div");
    const divElem2 = document.createElement("div");
    const divElem3 = document.createElement("div");
    const article = document.createElement("article");
    const card = document.createElement("figure");
    divElem1.className = "container"
    divElem2.className = "row"
    divElem3.className = "row"
    article.className = "col-md-4"
    card.className = "col-lg-12";
    card.innerHTML = "<img src=\""+imgSrc+"\"  class=\"img img-responsive article-img\">"+title+
         "<figcaption class=\"figure-caption text-white\">"
        + body + "</figcaption></figure></article>";
    
    
    article.appendChild(card);
    divElem3.appendChild(article);
    divElem2.appendChild(divElem3);

    document.getElementById("container").appendChild(divElem2);

}

function showAllNews(allNews) {
    allNews.forEach(function (news) {
        addNews(news.imgSrc, news.title, news.body)
    });
}

function sendNewsToServer(allNews) {
    if (allNews.length) {
        alert("Successfully sent to server!")
    }
}

});