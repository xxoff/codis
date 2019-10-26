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

            })
        });

        routie({
        })
    });
