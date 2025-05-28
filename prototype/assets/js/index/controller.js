function renderContent(view)
{
    let html = "";
    const route = model.app.currentRoute;
    const page = model.data.routes.find(r => r.name === route);

    for (let i = 0; i < page.nav.links.length; i++)
    {
        if (page.nav.links[i].function.includes(model.app.currentPage))
        {
            html += `<h2>${page.nav.links[i].name}</h2>`;
        }
    }

    if (route == "index")
    {
        switch (view)
        {
            case "wim" :
                html += wimContent();
                break;

            case "wia" :
                html += wiaContent();
                break;

            default:
                console.error(view + " not found | Default");
                html += aboutContent();
                break;
        }

    }
    return html;
}