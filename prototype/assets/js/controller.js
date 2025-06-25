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
    document.querySelector("#footer").innerHTML = footerView();
}

function generateForm(id)
{
    console.log("Generating form for id:", id);
    const form = model.data.schemas[id];
    const inputs = form.fields;
    const btn = form.btn;
    const n = inputs.length;
    let html;

    switch (form.name)
    {
        case "register":
            //  Generate register form
            html = /*HTML*/ `
            <form onsubmit="handleRegister(event)" method="${form.method}" class="${form.cls}">`;
            break;

        case "login":
            //  Generate login form
            html = /*HTML*/ `
            <form onsubmit="handleLogin(event)" method="${form.method}" class="${form.cls}">`;
            break;

        default:
            html = /*HTML*/ `
            <form method="${form.method}" class="${form.cls }">`;
            break;
    }
    
    for (let i = 0; i < n; i++)
    {
        const input = inputs[i];

        html += /*HTML*/ `
                <label for="${input.id}">${input.name}</label>
                <input type="${input.type ? input.type : 'text'}" id="${input.id}" name="${input.name}" placeholder="${input.placeholder}" class="${input.cls}" required="${input.required ? 'required' : ''}">`;
                
    }
    html += /*HTML*/ `
    <button type="${btn.type}" class="${btn.cls}">${btn.name}</button>
    </form>`;
    return html;

}

function verifyCredentials(e)
{
    //    #   Verify the credentials of the existing user

    const data = model.data;
    const user = data.users.find(user => user.username === e.target[0].value);

    if (user.passcode !== e.target[1].value && user.username !== e.target[0].value)
    {
        //  Show an error message
        alert("You submitted incorrect passcode or username try again.");
        return;
    }
    else
    {
        //  Set the loggedIn variable to true
        user.isActive = true;
        updateView();
        return;
    }
}

function handleLogin(e)
{
        //  Prevent the page from refreshing
        e.preventDefault();
        verifyCredentials(e);
}