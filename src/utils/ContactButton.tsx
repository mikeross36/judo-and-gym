import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type PropsType = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactButton: React.FC<PropsType> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-4 py-2 text-sm text-white shadow shadow-black hover:bg-primary-500"
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ContactButton;
