import { motion } from "framer-motion";
import { SetSelectedPageType } from "../home/Home";
import { SelectedPage } from "../../utils/types";
import PageTitle from "../../utils/PageTitle";
import AboutItem from "./AboutItem";
import { aboutItems } from "./data";
import members from "@/assets/members.png";
import ContactButton from "../../utils/ContactButton";

const AboutUs = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section id="aboutus" className="mx-auto min-h-full w-5/6 pt-28">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto text-base md:my-5"
        >
          <div className="md:ml-[2.5rem] md:w-3/5">
            <PageTitle>
              More Then Just a <span className="text-primary-300">Gym</span>
            </PageTitle>
            <p className="my-5 md:leading-6">
              If you’re new to the gym, it can be hard to know where to start.
              Just stepping onto the gym floor can be intimidating. If you’re a
              routine gym goer, your routine may get stale and your results may
              plateau. These are two common reasons our members seek personal
              training. For new members, we can introduce you to the equipment,
              show you how to use it, and explain the benefits.
            </p>
          </div>
        </motion.div>
        <motion.div className="mt-5 grid items-center justify-center gap-8 md:grid-cols-2 md:gap-14 lg:grid-cols-3">
          {aboutItems.map((item) => {
            return (
              <AboutItem
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
        <div className="mt-16 items-center justify-between md:mt-20 md:flex">
          <img
            src={members}
            alt="gym members pic"
            className="mx-auto drop-shadow-lg lg:w-[40rem]"
          />
          <div className="flex-auto md:w-2/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <PageTitle>
                Thousands of Happy Members Getting{" "}
                <span className="text-primary-300">Fit</span>
              </PageTitle>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                If you’re ready to commit to getting in the best shape of your
                life, personal training is a great place to start. We’ll begin
                with an evaluation of your current fitness level and create a
                Personal Health Plan that will hold you accountable. Our
                certified personal trainers are ready to assist you, so stop
                making excuses and let’s get to work.
              </p>
              <p className="mb-5">
                Your fitness journey doesn’t end when your personal training
                session ends. Our coaches can teach you proper form, discuss
                your diet, and make recommendations about what to do after your
                sessions.
              </p>
              <div className="mt-12">
                <ContactButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ContactButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default AboutUs;
