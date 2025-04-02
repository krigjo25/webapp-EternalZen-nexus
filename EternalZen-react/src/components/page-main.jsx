//  EternalZen Main content
//  Importing dependencies

export default function article({data})
{

    //  Initializing data
    console.log(data);
    return (
            <article className='flex-wrap-row'>
                {data && <h2>{data.headline}</h2>}
            </article>
    );
}