define(function () {
    return {
        rows: [
            {
                view: "template",
                template: "Create idea",
                type: "header"
            },
            {
                view: "text",
                width: 500,
                placeholder: "Header (name)"
            },
            {
                view: "textarea",
                width: 500,
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
                        width: 300,
                        placeholder: "Author"
                    }
                ]
            },
            {
                label: "Create",
                type: "form",
                view: "button",
                width: 500
            }
        ]
    }
});