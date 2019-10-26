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
    ['views/profile'],
    function (profile) {
        var imgTemplate = function(obj){
            return '<img src="'+obj.src+'" class="content" alt="logo" width="20"/>'
        };

        webix.ready(function () {
            webix.ui({
                container:"app",
                width: document.body.clientWidth,
                height: document.body.clientHeight,
                id: "root",
                type: "space",
                paddingX: 80,
                paddingY: 60,
                rows: [
                    {
                        type: "clean", cols: [
                            {
                                view: "button", label: "Hot", click: function () {

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
                        type: "wide", cols: [
                            {
                                id: "news",
                                gravity: 1.6180339887,
                                type: "wide",
                                rows: [
                                    {template: "idea1", autoheight: true},
                                    {template: "idea2", autoheight: true},
                                    {template: "idea3", autoheight: true}
                                ]
                            },
                            {
                                rows: [
                                    {
                                        view: "button", label: "Authorization", click: function () {

                                        }
                                    },
                                    {
                                        view: "button", label: "Profile", click: function () {
                                            routie("profile")
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
            'profile': buildRoute(profile, "root")
        })
    });
