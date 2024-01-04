import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../utils/types";

type PropsType = {
  image: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutItem: React.FC<PropsType> = ({
  image,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="mx-auto w-[18rem] rounded-md border-2 border-gray-100 px-5 py-12 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-4 border-gray-100">
          <img
            src={image}
            alt="about item pic"
            className="w-[80px] rounded-full"
          />
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p className="cursor-pointer text-sm font-bold text-primary-500 hover:text-secondary-500 hover:underline">
          Learn More
        </p>
      </AnchorLink>
    </motion.div>
  );
};

export default AboutItem;
