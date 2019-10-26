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
    [],
    function () {
        var imgTemplate = function(obj){
            return '<img src="'+obj.src+'" class="content" alt="logo" width="20"/>'
        };

        webix.ready(function () {
            webix.ui({
                container:"app",
                width: document.body.clientWidth,
                height: document.body.clientHeight,
                type: "space",
                rows: [
                    {
                        type: "clean",
                        cols: [
                            {view:"button", type:"image", image:"sources/img/logo.png"},
                            {view: "button", label: "Hot"},
                            {view: "button", label: "Topical"},
                            {gravity: 3}
                        ]},
                    {
                        type: "wide",
                        cols: [
                            {rows : [
                                    {template: "idea1"},
                                    {template: "idea2"}
                                ]},
                            {template: "auth"}
                        ]
                    }
                ]
            })
        });

        routie({
        })
    });
