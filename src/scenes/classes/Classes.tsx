import { motion } from "framer-motion";
import { SetSelectedPageType } from "../home/Home";
import { SelectedPage } from "../../utils/types";
import PageTitle from "../../utils/PageTitle";
import { classes } from "./data";
import ClassItem from "./ClassItem";

const Classes = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section
      id="classes"
      className="w-full pb-8 pt-28 md:container md:mx-auto md:pb-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6 text-base"
        >
          <div className="lg:w-3/5">
            <PageTitle>Our Classes</PageTitle>
            <p className="py-5">
              Group fitness classes are the perfect option for those looking to
              surround themselves with a group of like-minded individuals
              working towards achieving their fitness goals together. The
              benefits of group fitness extend far beyond losing weight, getting
              toned, and increasing endurance - they are an opportunity to build
              community, have fun, and create everlasting memories.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[16rem] w-full overflow-x-auto overflow-y-hidden md:h-[22rem]">
          <ul className="w-[105rem] whitespace-nowrap md:w-[125rem]">
            {classes.map((item) => {
              return (
                <ClassItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
