export default function Inputs( { input }) {
    console.log(input, "test")
    return (
        <input
        name = {input.name}
        type = {input.type}
        value = {input.value}
        className={input.cls}
        onChange = {input.onChange}
        placeholder = {input.placeholder}
        />
    );
    }