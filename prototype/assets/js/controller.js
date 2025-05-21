// misc functionallities

function navigateView(view)
{
    //  Navigate to view
    model.app.currentPage = view;
    updateView();
}
function navigateRoute(route)
{
    //  Navigate to view
    model.app.currentRoute = route;
    updateView();
}

function updateView()
{
    let html;
    const page = model.app.currentPage;
    const route = model.app.currentRoute;

    if (route == "index")
    {
        switch (page)
        {
            case "index" :
                // code for index page
                html = indexView();

                break;
        }
    }
    document.querySelector("#header").innerHTML = headerView();
    document.querySelector("#root").innerHTML = html;
}