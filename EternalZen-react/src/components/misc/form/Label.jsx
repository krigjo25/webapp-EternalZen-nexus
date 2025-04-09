export default function Label({ cls, name})
{
    return (
        <label className={cls} for={name}>
            {name}
        </label>
    );
}