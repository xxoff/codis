define(
    function () {

        // function parseJSON(data) {
        //     return window.JSON && window.JSON.parse ? window.JSON.parse( data ) : (new Function("return " + data))();
        // }
        var obj;
        webix.ajax("hot").then(function(data){
            //var obj = parseJSON(data);
             obj = JSON.parse(data.text());
            console.log(obj);
        });

        webix.protoUI({
            name: "article",
            $init:function(config){
                var imgTemplate = function (obj) {
                    return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
                };

                config.rows = [
                    {
                        cols: [
                            {
                                icon: "wxi-dots",
                                width: 35,
                                height: 35,
                                view: "icon",
                                id: "type"
                            }, {
                                label: "",
                                view: "label",
                                width: 465,
                                height: 35,
                                id: "articleName"
                            },
                        ]
                    },
                    {
                        cols: [{
                            icon: "wxi-dots",
                            width: 35,
                            height: 180,
                            view: "icon",
                            id: "ornament"
                        }, {
                            rows: [{
                                label: "",
                                view: "label",
                                width: 465,
                                height: 100,
                                id: "body"
                            },
                                {
                                    label: "Tags",
                                    view: "button",
                                    width: 50,
                                    height: 30,
                                    id: "tags"

                                }, {
                                    cols: [{
                                        label: "Comments",
                                        type: "form",
                                        view: "button",
                                        width: 90,
                                        height: 30,
                                        id: "comments"
                                    },
                                        {
                                            options: [
                                                "Like",
                                                "Dislike"
                                            ],
                                            view: "radio",
                                            width: 180,
                                            height: 10,
                                            id: "rate"
                                        },

                                        {
                                            label: config.rating,
                                            view: "label",
                                            width: 50,
                                            height: 30,
                                            id: "ratingValue"
                                        },
                                        {
                                            label: config.author + " " + config.data,
                                            view: "label",
                                            width: 200,
                                            height: 30,
                                            id: "articleInfo"
                                        }]
                                }]
                        }]
                    }
                ]
            }
        }, webix.ui.layout);

        return {
            rows: [
                {view: "article", rating: 12, author: "sdfsdf", data: "sgsdf"}
            ]
        }
    }
);