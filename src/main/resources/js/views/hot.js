define(
    function () {
        webix.protoUI({
            name: "article",
            $init: function (config) {
                var imgTemplate = function (obj) {
                    return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
                };

                config.rows = [
                    {
                        cols: [
                            {
                                template: imgTemplate,
                                data: {src: "sources/img/idea-icon.png"},
                                autofit: true,
                                width: 35,
                                height: 35,
                                css: {"background":"transparent", "border":"transparent"}
                            }, {
                                label: "",
                                view: "label",
                                width: 465,
                                height: 35,
                            }
                        ]
                    },
                    {
                        cols: [{
                            template: imgTemplate,
                            data: {src: "sources/img/ornament.png"},
                            autofit: true,
                            width: 35,
                            height: 180,
                            css: {"background":"transparent", "border":"transparent"}
                        }, {
                            rows: [{
                                label: "",
                                view: "label",
                                width: 465,
                                height: 100
                            },
                                {
                                    label: "Tags",
                                    view: "button",
                                    width: 50,
                                    height: 30

                                }, {
                                    cols: [{
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
                                            label: config.rating,
                                            view: "label",
                                            width: 50,
                                            height: 30
                                        },
                                        {
                                            label: config.author + " " + config.data,
                                            view: "label",
                                            width: 200,
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
                data: obj[i].date_of_creation
            });
        }

        return {
            rows: newsArticles
            // rows: [
            //     {view: "article", rating: 12, author:"1Hot", data:"sfd"},
            //     {view: "article", rating: 14, author:"2Hot", data:"sfd"}
            // ]
        }
    }
);