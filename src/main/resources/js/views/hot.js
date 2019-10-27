define(
    function () {
        debugger
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
                            }, {
                                label: "",
                                view: "label",
                                width: 465,
                                height: 35,
                                css: {"background": "transparent", "border": "transparent"}
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
                            css: {"background": "transparent", "border": "transparent"}
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
        debugger
        //var obj = parseJSON(data);
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
        }
    }
);