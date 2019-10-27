define(function () {
    var imgTemplate = function (obj) {
        return '<img src="' + obj.src + '" class="content" alt="logo" width="20"/>'
    };
    return {
        rows: [
            {
                cols: [
                    {
                        template: imgTemplate,
                        data: {src: "sources/img/smile.png"},
                        autofit: true,
                        width: 50,
                        height: 50,
                    },
                    {
                        view: "template",
                        template: "pupptmstr",
                        width: 150
                    }
                ]
            },
            {
                view: "template",
                template: "Frontend (Webix, JQuery) developer.",
                width: 300,
                height: 80
            },
            {
                cols: [{
                    template: imgTemplate,
                    data: {src: "sources/img/star.png"},
                    autofit: true,
                    width: 40,
                    height: 40,
                },
                    {
                        view: "template",
                        template: "999+",
                        width: 20
                    }
                ]
            },

            {
                view: "template",
                template: "My git: https://github.com/pupptmstr",
                width: 200,
                height: 25
            },
            {
                view: "toggle",
                label: "Wanna teamwork",
                width: 200,
                value: "true"
            }
        ]
    }
});