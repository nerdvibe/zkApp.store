export default function AuthenticationForm({ children, title }) {
  return (
    <div className="flex flex-col gap-4 my-11 mx-8">
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <div className="flex flex-row gap-4 h-full my-10 max-h-[800px] justify-center">
        {children}
      </div>
    </div>
  );
}
