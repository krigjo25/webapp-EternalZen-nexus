function AuthoricationView(id)
{
    //  Fetch the model
    const data = model.data;
    const loggedIn = data.loggedIn;
    let html;

        //  Create a new modal

        //  Send the first form to the view
        html = /*HTML*/`${generateForm(data.form[0].id)}`;

        return html;
}

function loginView()
{
    const form = data.form;
    html = /*HTML*/`${generateForm(data.form[0].id)}`;

    document.querySelector('.auth-content').innerHTML = html;
}

function registerView()
{
    const form = data.form;
    html = /*HTML*/`${generateForm(data.form[1])}`;

    document.querySelector('.auth-content').innerHTML = html;
}