function indexView()
{
    let html = "";
    const routes = model.data.routes[0];
    const quote = model.data.misc.quote;

    html = /*HTML*/`
        <article class="content flex-wrap-row">
            ${renderContent(model.app.currentPage)}
        </article>
        <aside class="${quote.cls}">
            ${renderTip()}
        </aside>`;

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
    todaysQuote();
    const quote = model.data.misc.quote;

    let html = `
    <h2>${quote.title}</h2>
    <p>${quote.todaysQuote}</p>`;
    return html;
}

function todaysQuote()
{
    const quote = model.data.misc.quote;
    const n = Math.round(Math.random(quote.content.length));

    model.data.misc.quote.todaysQuote = quote.content[n];
}