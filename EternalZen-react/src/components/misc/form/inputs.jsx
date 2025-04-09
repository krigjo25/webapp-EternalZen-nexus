export default function Inputs( { input }) {
    console.log(input, "test")
    return (
        <input
        type={input.type}
        value={input.value}
        className={input.cls}
        
        onChange={input.onChange}
        placeholder={input.placeholder}
        />
    );
    }