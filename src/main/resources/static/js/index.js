requirejs.config({
    baseUrl: 'js'
});

function buildRoute(view, id) {
    return function () {
        webix.ui({
            id: id,
            rows: [
                view
            ]
        }, $$(id));
    }
}

require(
    ['views/createIdea', 'views/hot', 'views/article'],
    function (createIdea, hot) {
        var imgTemplate = function (obj) {
            return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
        };

        var logoImg = function () {
            return '<img src="../sources/img/logo.png" alt="logo" width="22000"/>'
        };

        webix.ready(function () {
            webix.ui({
                height: document.body.clientHeight,
                width: document.body.clientWidth,
                type: "space",
                paddingX: 120,
                rows: [
                    {
                        cols: [
                            {
                                view: "button", type: "image"
                            },
                            {
                                view: "button", label: "Hot", click: function () {
                                    routie("hot")
                                }
                            },
                            {
                                view: "button", label: "Topical", click: function () {

                                }
                            },
                            {view: "button", label: "All"},
                            {view: "button", label: "Interesting"},
                            {gravity: 2.5}
                        ],
                    },
                    {
                        cols: [
                            {
                                id: "news",
                                gravity: 1.6180339887
                            },
                            {
                                rows: [
                                    {
                                        view: "button", label: "Authorization", click: function () {

                                        }
                                    },
                                    {
                                        view: "button", label: "Profile", click: function () {
                                        }
                                    },
                                    {
                                        view: "button", label: "Create Idea", click: function () {
                                            routie("createIdea")
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
        });

        routie({
            '': routie("hot"),
            'hot': buildRoute(hot, "news"),
            'createIdea': buildRoute(createIdea, "news")
        })
    });
