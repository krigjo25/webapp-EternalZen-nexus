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
        tagline: "Your personal meditation and affirmation app",
        logo: 
        {
            src: "assets/images/logo.png",
            alt: "EternalZen Logo",
        },
        nav:
        {
            cls: "auth-content flex-wrap-row-justify-space-between",
            links:
            [
                {
                    type: "btn",
                    name: "Login",
                    link: "#login",
                },
                {
                    type: "btn",
                    name: "Register", 
                    link: "#register",
                },
            ],
        },
    },
    footer:
    {
        nav:
        {
            cls: "flex-wrap-row-justify-space-around",
            links:
            [
                {
                    type: "link",
                    name: "Privacy Policy",
                    href: "www.google.com",
                },
                {
                    type: "link",
                    name: "Terms of Service",
                    href: "www.google.com",
                },
                {
                    type: "btn",
                    name: "Contact Us",
                    function: "contactView();",
                },
            ],
        },
    },

    data:
    {
        schemas:
        {
            contactUs:
            {
                name: "contactUs",
                fields:
                [
                    {
                        name: "name",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "email",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "message",
                        type: "textarea",
                        required: true,
                    },
                ],
            },
            register:
            {
                name: "register",
                fields:
                [
                    {
                        type: "text",
                        required: true,
                        name: "username",
                    },
                    {
                        type: "text",
                        name: "email",
                        required: true,
                    },
                    {
                        required: true,
                        type: "password",
                        name: "passcode",
                    },
                    {
                        required: true,
                        type: "password",
                        name: "confirmPassCode",
                    },
                ],
            },
            login:
            {
                name: "login",
                fields:
                [
                    {
                        name: "username",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "password",
                        type: "password",
                        required: true,
                    },
                ],
            },

            journalEntry:
            {
                name: "journal-Entry",
                fields:
                [
                    {
                        name: "title",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "content",
                        type: "textarea",
                        required: true,
                    },
                    {
                        name: "date",
                        type: "date",
                        todaysDate: Date.now(),
                    },
                ],
            },
            search:
            {
                name: "search",
                fields:
                [
                    {
                        name: "query",
                        type: "text",
                        required: true,
                    },
                ]
            },
        },
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
                        type: "Button",
                    },
                    {
                        id: 1,
                        name: "about",
                        type: "Button",
                    },
                    {
                        id: 2,
                        name: "WIA",
                        type: "Button",
                    },
                    {
                        id: 3,
                        type: "link",
                        name: "login",
                    },
                    {
                        id: 4,
                        type: "link",
                        name: "register",
                    },
                ]
            }
        ],
        users:
        [
            {
                id: 0,
                name: "",
                
                image: "",
                role: "user",
                passcode: "",
                bio: "This is a test user profile.",

                username: "testuser",
                email: "testuser@example.com",
                
                isActive: false,
                isDeleted: false,
                displayName: false,
                isDeactivated: false,
                createdAt: Date.now(),
            }
        ],
        misc:
        {
            quote : 
            {
                cls: "quote",
                title: "Today's Quote",
                todaysQuote: "",
                content: 
                [
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in molestie justo, nec ultricies turpis.
                    Aenean scelerisque non dolor non sollicitudin.Morbi finibus
                    dui eu gravida consequat. Integer orci purus, accumsan in
                    maximus vel, tempor quis est. Sed efficitur massa at nulla
                    vulputate, at cursus elit congue. Morbi mollis eget magna ut
                    molestie. Suspendisse auctor, justo in bibendum aliquet,
                    arcu justo porttitor ipsum, sit amet posuere libero nunc ut
                    leo. Donec porta sem tellus. Integer rhoncus neque sit amet
                    purus mollis imperdiet. Etiam ullamcorper ipsum lacus, quis
                    scelerisque est vestibulum vel. Ut luctus nisl libero, vitae
                    dictum purus efficitur in. Duis pharetra lorem a arcu venenatis
                    placerat. Integer in sem ornare, posuere nulla et, tincidunt
                    sapien. Nullam vestibulum, sem vel vulputate sodales, lectus
                    elit vulputate mauris, eu suscipit magna diam vel urna.`,

                    `Integer felis felis, mattis at dignissim et, lacinia scelerisque
                    felis. Donec nec est at est ornare dictum. Vivamus eros odio,
                    semper at quam vitae, pretium fringilla magna. Proin quis neque
                    tristique, sodales mi sed, dapibus enim. Proin mauris arcu, tempor
                    sed augue at, gravida tincidunt ligula. Suspendisse ut elit a justo
                    ultrices suscipit sit amet sed mi. Aenean justo elit, fringilla
                    fermentum purus a, pretium iaculis purus. Maecenas faucibus quam
                    vitae molestie rutrum.`,
                ],

            },
        },
    }
};