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
            return '<img src="' + obj.src + '" class="content" alt="logo" width="200"/>'
        };

        webix.ready(function () {
            webix.ui({
                height: document.body.clientHeight,
                width: document.body.clientWidth,
                type: "space",
                paddingX: 290,
                paddingY: 20,
                css: "main-background",
                rows: [
                    {
                        cols: [
                            {
                                template:imgTemplate,
                                data: {src: "sources/img/logo.png"},
                                autoheight: true,
                                autowidth: true,
                                css: "transparent-image"
                            },
                            {
                                view: "button", label: "Hot", width: 91, click: function () {
                                    routie("hot")
                                }
                            },
                            {
                                width: 50
                            },
                            {
                                view: "button", label: "Topical", width: 74, click: function () {
                                    routie("topical")
                                }
                            },
                            {
                                view: "button", label: "All", width: 50, click: function () {
                                    routie("all")
                                }
                            },
                            {
                                view: "button", label: "Interesting",  width: 100, click: function () {
                                    routie("interesting")
                                }
                            },
                            {width: 575}
                        ]
                    },
                    {
                        height: 8
                    },
                    {
                        cols: [
                            {
                                id: "news"
                            },
                            {
                                width: 80
                            },
                            {
                                view: "form",
                                width: 350,
                                rows: [
                                    {
                                        view: "button", label: "Authorization", click: function () {

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