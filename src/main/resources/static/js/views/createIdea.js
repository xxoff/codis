define(function () {
    return {
        view: "form",
        rows: [
            {
                view: "template",
                template: "Create idea",
                type: "header"
            },
            {
                view: "text",
                width: 752,
                placeholder: "Header (name)"
            },
            {
                view: "textarea",
                width: 752,
                height: 60,
                placeholder: "Description"
            },
            {
                cols: [{
                    view: "counter",
                    width: 200,
                    value: 1,
                    label: "Difficulty",
                    min: 1,
                    max: 5,
                    step: 0.5
                },
                    {
                        view: "text",
                        width: 552,
                        placeholder: "Author"
                    }
                ]
            },
            {
                label: "Create",
                type: "form",
                view: "button",
                width: 500,
                click: function () {
                    var idea_data = $$("news").getValues();

                }
            }
        ]
    }
});