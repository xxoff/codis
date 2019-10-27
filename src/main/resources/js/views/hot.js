define(
    function () {
        webix.protoUI({
            name: "article",
            $init: function (config) {
                var imgTemplate = function (obj) {
                    return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
                };

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
                                width: 465,
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
                                    width: 465,
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


        // var newsArticles = [];
        // var xhr = webix.ajax().sync().get('hot');
        // var obj = JSON.parse(xhr.responseText);
        // for (var i = 0; i < obj.length; i++) {
        //     newsArticles.push({
        //         view: "article",
        //         rating: obj[i].interest,
        //         author: obj[i].author,
        //         data: obj[i].date_of_creation
        //     });
        // }

        return {
            // rows: newsArticles
            type: "wide",
            rows: [
                {
                    view: "article",
                    rating: 12,
                    author: "1Hot",
                    data: "sfd",
                    header: "An Idea",
                    description: "Many interesting letters asjbkjerkebrvklbwelrhvblehrbvlkwhevlksh"
                },
                {
                    view: "article",
                    rating: 14,
                    author: "2Hot",
                    data: "sfd",
                    header: "Another Idea",
                    description: "Many more interesting letters bla bla bla bla lorem ipsum asdf"
                }
            ]
        }
    }
);