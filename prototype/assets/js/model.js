//  Application model
let model = {
    app:
    {
        name: "EternalZen",
        version: "0.0.1beta",
        currentPage: "about",
        currentRoute: "index",

    },
    header:
    {
        title: this.app,
        subtitle: "Your personal meditation and affirmation app",
        logo: 
        {
            src: "assets/images/logo.png",
            alt: "EternalZen Logo",
        },
        nav:
        {
            cls: "flex-wrap-row",
            links:
            [
                {
                    type: "link",
                    name: "Login",
                    link: "#login",
                },
                {
                    type: "link",
                    name: "Register", 
                    link: "#register",
                },
            ],
        },
    },

    data:
    {
        routes:
        [
            {
                id: 0,
                name: "index",
                nav:
                {
                    cls: "flex-wrap-row-justify-space-evenly",
                    links: 
                    [
                        {
                            id: 0,
                            type: "btn",
                            name: "EternalZen?",
                            function: "navigateView('about');",
                        },
                        {
                            id: 1,
                            type: "btn",
                            name: "What Is Meditation?",
                            function: "navigateView('wim');",
                        },
                        {
                            id: 2,
                            type: "btn",
                            name: "What Is Affirmation?",
                            function: "navigateView('wia');",
                        },

                    ],
                },

                pages:
                [
                    {
                        id: 0,
                        name: "index",
                    },
                    {
                        id: 1,
                        name: "about",
                    },
                    {
                        id: 2,
                        name: "WIA",
                    },
                    {
                        id: 3,
                        name: "login",
                    },
                    {
                        id: 4,
                        name: "register",
                    },
                ]
            }
        ],
        user:
        []
    }
}