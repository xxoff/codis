define(
    function () {
        webix.protoUI({
            name: "article",
            $init: function (config) {
                var imgTemplate = function (obj) {
                    return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
                };
                var obj = function () {
                    if(config.author === 1) {
                        return "Pete";
                    }
                    if(config.author === 2) {
                        return "Vasya";
                    }
                    if(config.author === 3) {
                        return "Vova";
                    }
                    if(config.author === 4) {
                        return "Tima";
                    }
                    if(config.author === 5) {
                        return "Lyonya";
                    }
                }

                this.$view.className += " article-template";
                config.rows = [
                    {
                        cols: [
                            {
                                template: imgTemplate,
                                data: {src: "sources/img/idea-icon.png"},
                                autofit: true,
                                width: 35,
                                height: 35,
                                css: "transparent-image"
                            },
                            {
                                width: 17
                            },
                            {
                                template: config.header,
                                width: 700,
                                height: 35,
                                css: "article-header"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                template: imgTemplate,
                                data: {src: "sources/img/ornament.png"},
                                autofit: true,
                                width: 35,
                                height: 180,
                                css: "transparent-image"
                            },
                            {
                                width: 17
                            },
                            {
                                rows: [{
                                    template: config.description,
                                    width: 700,
                                    height: 100,
                                    css: "article-content"
                                },
                                    {
                                        label: "Tags",
                                        view: "button",
                                        width: 50,
                                        height: 30
                                    },
                                    {
                                        cols: [
                                            {
                                                label: "Comments",
                                                type: "form",
                                                view: "button",
                                                width: 90,
                                                height: 30
                                            },
                                            {
                                                options: [
                                                    "Like",
                                                    "Dislike"
                                                ],
                                                view: "radio",
                                                width: 180,
                                                height: 10
                                            },
                                            {
                                                label: "Rating: " + config.rating + " " + "Author: " + obj(),
                                                view: "label",
                                                width: 400,
                                                height: 30
                                            }]
                                    }]
                            }]
                    }
                ]
            }
        }, webix.ui.layout);


        var newsArticles = [];
        var xhr = webix.ajax().sync().get('hot');
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
            newsArticles.push({height: 7})
        }

        return {
            type: "wide",
            rows: newsArticles
        }
    }
);