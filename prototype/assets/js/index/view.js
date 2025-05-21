function indexView()
{
    //!  TODO Present the view in a more readable way
    const page = model.app.currentPage;
    let navigation =
    [
        {
            
            type: "btn",
            link: "#about",
            name: "What is meditation?",
            function:renderIndexContent(),
        },
        {
            type: "btn",
            link: "#wia",
            name: "What is Affirmation?",
            function: renderWIAContent(),
        },
    ]

    const html = `
    <main>
        ${renderNavigation(navigation)}
        <article id="content">
        ${renderContent(page)}
        </article>
        <aside>
        ${renderTip()}
        </aside>
    </main>`;

    return html; 
}

function renderContent(view)
{
    const route = model.app.currentRoute;

    if (route == "index")
    {
        switch (view)
        {
            case "index" :
                // code for index page
                return renderIndexContent();

            case "about" :
                return renderAboutContent();

                case "WIA" :
                return renderWIAContent();

            default:
                console.error(view + " not found");
                return "";
        }
    }
    
    //!  TODO : Create a content component
    let html = ``;
    return html;
}

function renderIndexContent()
{
    //!  TODO : Create a content component
    let html = ``;
    return html;
}

function renderAboutContent()
{
    //!  TODO : Create a content component
    let html = ``;
    return html;
}
function renderWIAContent()
{
    //!  TODO : Create a content component
    let html = ``;
    return html;
}

function renderTip()
{
    //!  TODO : Create a tip component
    let html = ``;
    return html;
}