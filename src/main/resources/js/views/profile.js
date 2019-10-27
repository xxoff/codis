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
                        data: {src: "sources/img/logo.png"},
                        autofit: true,
                        width: 50,
                        height: 50,
                    },
                    {
                        view: "template",
                        template: "Username",
                        width: 150
                    }
                ]
            },
            {
                view: "template",
                template: "About",
                width: 300,
                height: 80
            },
            {
                cols: [{
                    template: imgTemplate,
                    data: {src: "sources/img/rating.png"},
                    autofit: true,
                    width: 40,
                    height: 40,
                },
                    {
                        view: "template",
                        template: "0",
                        width: 20
                    }
                ]
            },

            {
                view: "template",
                template: "My git: git",
                width: 200,
                height: 25
            },
            {
                view: "toggle",
                label: "Wanna teamwork",
                width: 200,
                value: "false"
            }
        ]
    }
});