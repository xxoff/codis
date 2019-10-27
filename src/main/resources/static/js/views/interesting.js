define(
    function () {

        var newsArticles = [];
        var xhr = webix.ajax().sync().get('interesting');
        var obj = JSON.parse(xhr.responseText);
        for (var i = 0; i < obj.length; i++) {
            newsArticles.push({
                view: "article",
                rating: obj[i].interest,
                author: obj[i].author,
                data: obj[i].date_of_creation,
                description: obj[i].description,
                header: obj[i].name
            });
        }

        return {
            type: "wide",
            rows: newsArticles
        }
    }
);