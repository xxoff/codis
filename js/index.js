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
                    {cols: [
                            {template:imgTemplate, data:{src:"resources/img/logo.png"}, autofit: true},
                            {view: "button", label: "Hot"},
                            {view: "button", label: "Topical"}
                        ]}
                ]
            })
        });

        routie({
        })
    });
