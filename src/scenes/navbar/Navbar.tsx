import { useState } from "react";
import logo from "@/assets/logo.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "../../utils/types";
import ContactButton from "../../utils/ContactButton";
import MobileMenu from "./MobileMenu";

type PropsType = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<PropsType> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const navbarBg = isTopOfPage ? "" : "bg-zinc-50 drop-shadow";
  const isAboveMedium = useMediaQuery("(min-width:62rem)");

  return (
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed top-0 z-[30] w-full py-3`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="navbar logo" className="w-16" />
            {isAboveMedium ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text-md gap-10`}>
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
                </div>
                <ContactButton setSelectedPage={setSelectedPage}>
                  Explore
                </ContactButton>
              </div>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-full p-2"
              >
                <Square3Stack3DIcon className="h-10 w-10 text-primary-500" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMedium && isMenuOpen && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </nav>
  );
};

export default Navbar;
