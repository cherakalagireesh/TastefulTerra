export default function FormWrapper({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center border bg-slate-50">
      {children}
    </div>
  );
}
