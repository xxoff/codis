requirejs.config({
    baseUrl: 'js'
});

require(
    ['views/article'],
    function (article) {
        webix.protoUI({
            name: "article",
            $init:function(config){
                this.set(article(config.rating, config.author, config.date))
            }
        }, webix.ui.layout);

        return {
            rows: [
                {view: "article", rating: 12, author: "sdfsdf", date: "sgsdf"}
            ]
        }
    }
);
