export default function article({ article })
{
    console.log(article);
    return (
        <article className='flex-wrap-row'>
            <h2>{article.headline}</h2>
            {article.text.map(
                (element, i) => (
                <p key={i}> {element} </p>)
        )
            }
         </article>
    );
}
