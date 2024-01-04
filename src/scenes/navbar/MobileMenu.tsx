import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "../../utils/types";
import ContactButton from "../../utils/ContactButton";

type PropsType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const MobileMenu: React.FC<PropsType> = ({
  isMenuOpen,
  setIsMenuOpen,
  selectedPage,
  setSelectedPage,
}) => {
  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { scale: 0, x: 100 },
            visible: { scale: 1, x: 0 },
            exit: { scale: 0, x: 100 },
          }}
          className="fixed bottom-0 right-0 z-40 h-full w-[19rem] bg-zinc-100 shadow-xl shadow-black transition duration-500 ease-in-out"
        >
          <div className="flex justify-end p-10">
            <button onClick={() => setIsMenuOpen(false)}>
              <XCircleIcon className="h-10 w-10 from-neutral-950 text-primary-500" />
            </button>
          </div>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="ml-[23%] flex flex-col gap-10 text-xl"
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Equipment"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div>
              <ContactButton setSelectedPage={setSelectedPage}>
                Explore
              </ContactButton>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
