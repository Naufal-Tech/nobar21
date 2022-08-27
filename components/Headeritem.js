function Headeritem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-yellow-300 font-bold">
        <Icon className="h-11 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 file:tracking-widest">{title}</p>
    </div>
  );
}

export default Headeritem;