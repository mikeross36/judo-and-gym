export type PropsType = {
  title: string;
  description: string;
  image: string;
};

const EquipmentItem: React.FC<PropsType> = ({ title, description, image }) => {
  const overlay =
    "p-5 absolute z-25 flex h-[13rem] w-[20rem] md:h-[18.75rem] md:w-[28.125rem] flex-col items-center justify-center whitespace-normal bg-primary-500 text-sm md:text-base text-center text-white opacity-0 transition duration-500 hover:opacity-60";
  return (
    <li className="relative mx-5 inline-block h-[13rem] w-[20rem] md:h-[18.75rem] md:w-[28.125rem]">
      <div className={overlay}>
        <p className="tex-xl">{title}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        src={image}
        alt="equipment item pic"
        className="h-[13rem] w-[20rem] object-cover shadow-xl shadow-slate-600 md:h-[18.75rem] md:w-[28.125rem]"
      />
    </li>
  );
};

export default EquipmentItem;
