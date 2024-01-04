const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="basis-3/5 text-2xl font-bold md:text-3xl">{children}</h1>
  );
};

export default PageTitle;
