function indexView()
{
    let html = "";
    const routes = model.data.routes[0];

    html = /*HTML*/`
    <main>
        ${renderNavigation(routes.nav)}
        <article class="content flex-wrap-row">
            ${renderContent(model.app.currentPage)}
        </article>
        <aside>
            ${renderTip()}
        </aside>
    </main>`;

    return html; 
}



function wimContent()
{
    let html = /*HTML*/`
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis egestas quam ut velit sagittis aliquam. Fusce aliquam
        erat leo, in posuere tellus ultrices at. 
        Nunc egestas ligulavitae ante semper, sit amet sollicitudin tortor molestie. 
        Donec a ante egestas, consequat arcu at, fringilla lacus.
        Donec fringilla risus eu ipsum interdum venenatis.
        Nulla pharetra orci dolor, et vestibulum odio viverra sit amet.
        Morbi tempus nibh nec imperdiet dictum.</p>`;
    return html;
}

function aboutContent()
{

    let html = /*HTML*/`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis egestas quam ut velit sagittis aliquam. Fusce aliquam
        erat leo, in posuere tellus ultrices at. 
        Nunc egestas ligulavitae ante semper, sit amet sollicitudin tortor molestie. 
        Donec a ante egestas, consequat arcu at, fringilla lacus.
        Donec fringilla risus eu ipsum interdum venenatis.
        Nulla pharetra orci dolor, et vestibulum odio viverra sit amet.
        Morbi tempus nibh nec imperdiet dictum.</p>`;
    return html;
}

function wiaContent()
{
    let html = /*HTML*/`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis egestas quam ut velit sagittis aliquam. Fusce aliquam
        erat leo, in posuere tellus ultrices at. 
        Nunc egestas ligulavitae ante semper, sit amet sollicitudin tortor molestie. 
        Donec a ante egestas, consequat arcu at, fringilla lacus.
        Donec fringilla risus eu ipsum interdum venenatis.
        Nulla pharetra orci dolor, et vestibulum odio viverra sit amet.
        Morbi tempus nibh nec imperdiet dictum.</p>`;
    return html;
}

function renderTip()
{
    //!  TODO : Create a tip component
    let html = ``;
    return html;
}