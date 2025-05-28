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
    const route = model.app.currentRoute;

    switch (route)
    {
        case "index" :
            // code for index route
            html = indexView();
            break;

        default:
            console.error(route + "not found | Default");
            break;
    }

    
    document.querySelector("#root").innerHTML = html;
    document.querySelector("#header").innerHTML = headerView();
}