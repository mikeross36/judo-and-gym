import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import home3 from "@/assets/home3.png";
import ContactButton from "../../utils/ContactButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePage from "@/assets/home-page.jpg";

export type SetSelectedPageType = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section id="home" className="py-8 md:h-full md:pb-0">
      {/* <div className="before:content-aboutbg before:-z-1 before:absolute before:top-0"></div> */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 lg:w-4/6"
      >
        <div className="main md:basic-3/5 mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-16 before:-top-16 before:z-[-1] md:before:content-hometext">
                <img src={home3} alt="home page text" />
              </div>
              <p className="mt-8 text-base md:mx-auto md:w-[80%] md:leading-6">
                Our story is more than 12 years in the making and we’re
                continuing to set the bar high when it comes to fitness
                innovation. Join us now!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-center"
          >
            <ContactButton setSelectedPage={setSelectedPage}>
              Join Now
            </ContactButton>
            <AnchorLink onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
              <p className="cursor-pointer text-sm font-bold text-primary-500 hover:text-secondary-500 hover:underline">
                Learn More
              </p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="mt-8 md:z-10 md:translate-y-24">
          <img
            src={HomePage}
            alt="home page pic"
            className="w-[25rem] rounded shadow-xl shadow-slate-600 md:w-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
