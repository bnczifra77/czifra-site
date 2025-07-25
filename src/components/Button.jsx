export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}