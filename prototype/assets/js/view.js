function headerView()
{

    const routes = model.data.routes[0];
    
    let html = /*HTML*/`
    <div class="flex-align-items-center-justify-content-space-between">

        ${logoView()}
        <h1>${model.app.name}</h1>
        ${renderNavigation(model.header.nav)}
    </div>
    ${renderNavigation(routes.nav)}`;

    return html;
}

function footerView()
{
    let html = /*HTML*/`${renderNavigation(model.footer.nav)}`;

    return html;
}

function logoView()
{
    let html = `
    <div class="EZ-logo">
        <img src="${model.header.logo.src}" alt="${model.header.logo.alt}">
    </div>`;
    return html;
}

function renderNavigation(navBar)
{
    let html = /*HTML*/ `<nav class = "${navBar.cls}">`;
    let nav = navBar.links;

    for (let i = 0; i < nav.length; i++)
    {
        let navItem = nav[i];
        
        if (navItem.type == "btn")
        {
            html += `<button onclick="${navItem.function}">${navItem.name}</button>`;
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

function renderView(view)
{
    switch (view)
    {
        case "wia": return wia();
        case "login": return loginView();
        case "about": return aboutView();

        default:
            console.error("Unknown view: " + view);
            return "";
    }
}