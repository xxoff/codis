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
    ['views/createIdea', 'views/hot', 'views/topical', 'views/all', 'views/interesting'],
    function (createIdea, hot, topical, all, interesting) {

        var firstLoad = true;

        var imgTemplate = function (obj) {
            return '<img src="' + obj.src + '" class="content" alt="logo" width="100"/>'
        };

        webix.ready(function () {
            webix.ui({
                height: document.body.clientHeight,
                width: document.body.clientWidth,
                type: "space",
                paddingX: 120,
                css: {"background":"#f2f2f2"},
                rows: [
                    {
                        cols: [
                            {
                                template:imgTemplate,
                                data: {src: "sources/img/logo.png"}
                            },
                            {
                                view: "button", label: "Hot", click: function () {
                                    routie("hot")
                                }
                            },
                            {
                                view: "button", label: "Topical", click: function () {
                                    routie("topical")
                                }
                            },
                            {
                                view: "button", label: "All", click: function () {
                                    routie("all")
                                }
                            },
                            {
                                view: "button", label: "Interesting", click: function () {
                                    routie("interesting")
                                }
                            },
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
            '': function () {
                if (firstLoad) {
                    routie("hot");
                    firstLoad = false;
                }
            },
            'hot': buildRoute(hot, "news"),
            'createIdea': buildRoute(createIdea, "news"),
            'topical': buildRoute(topical, "news"),
            'all': buildRoute(all, "news"),
            'interesting': buildRoute(interesting, "news")
        })
    });