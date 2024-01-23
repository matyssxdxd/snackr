export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-pink-300 text-pink-600 shadow-sm focus:ring-pink-500 ' +
                className
            }
        />
    );
}
