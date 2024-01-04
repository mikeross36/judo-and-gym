import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../utils/types";

type PropsType = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: React.FC<PropsType> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-300" : ""
      } font-semibold transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
