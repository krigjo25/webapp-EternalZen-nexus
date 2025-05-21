function headerView()
{
    let navigation =
    [
        {
            type: "link",
            name: "Login",
            link: "#login",
        },
        {
            type: "link",
            link: "#login",
            name: "Register",  
        }
    ]

    let html = /*HTML*/`
    ${logoView()}
    <h1>${model.app.name}</h1>
    ${renderNavigation(navigation)}`;

    return html;
}

function logoView()
{
    let html = `
    <div class="EZ-logo">
        <img src="${model.app.logo.src}" alt="${model.app.logo.alt}">
    </div>`;
    return html;
}

function renderNavigation(navBar)
{
    let html = "<nav>";

    console.log(navBar);
    for (let i = 0; i < navBar.length; i++)
    {
        let navItem = navBar[i];
        
        if (navItem.type == "btn")
        {
            html += `<button onclick="navigateView('${navItem.link}')">${navItem.name}</button>`;
        }
        else if (navItem.type == "link")
        {
            html += `<a href="${navItem.link}">${navItem.name}</a>`;
        }
        else
        {
            console.error(navItem + "Unknown navigation item type");
        }
    }

    html += "</nav>";
    
    return html;
}