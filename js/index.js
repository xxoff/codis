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
        webix.ready(function () {
            webix.ui({
                container:"app",
                width: document.body.clientWidth,
                height: document.body.clientHeight
            })
        });

        routie({
        })
    });
