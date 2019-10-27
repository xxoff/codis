define(
    function () {

        var newsArticles = [];
        var xhr = webix.ajax().sync().get('topical');
        var obj = JSON.parse(xhr.responseText);
        for (var i = 0; i < obj.length; i++) {
            newsArticles.push({
                view: "article",
                rating: obj[i].interest,
                author: obj[i].author,
                data: obj[i].date_of_creation
            });
        }

        return {
            // rows: [
            //     {view: "article", rating: 12, author:"1Interesting", data:"sfd"},
            //     {view: "article", rating: 14, author:"2Interesting", data:"sfd"}
            // ]
            rows: newsArticles
        }
    }
);