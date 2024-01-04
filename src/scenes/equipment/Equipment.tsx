import { motion } from "framer-motion";
import { SetSelectedPageType } from "../home/Home";
import { SelectedPage } from "../../utils/types";
import PageTitle from "../../utils/PageTitle";
import { equipment } from "./data";
import EquipmentItem from "./EquipmentItem";

const Equipment = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section
      id="equipment"
      className="w-full pb-16 pt-28 md:container md:mx-auto md:pb-20 md:pt-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Equipment)}
      >
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
            <PageTitle>Our Equipment</PageTitle>
            <p className="py-5">
              What started out as a single gym filled with custom made equipment
              has grown into a brand on the cutting edge of fitness. Judo & Gym
              aims to give its members the very best: from modern equipment to a
              clean and welcoming atmosphere with an expert staff. Amenities
              vary by location but often include superior strength equipment,
              top of the line cardio machines, group fitness classes such as
              indoor cycling, yoga, kickboxing, boot camp and more.
            </p>
          </div>
        </motion.div>
        <div className="mt-6 h-[16rem] w-full overflow-x-auto overflow-y-hidden md:h-[22rem]">
          <ul className="md:w=[124rem] w-[105rem] whitespace-nowrap">
            {equipment.map((item) => {
              return (
                <EquipmentItem
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

export default Equipment;
