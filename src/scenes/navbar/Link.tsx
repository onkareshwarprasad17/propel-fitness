import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${lowercasePage === selectedPage ? "text-primary-500" : ""} duration-500 transition hover:text-primary-300`}
      onClick={() => setSelectedPage(lowercasePage)}
      href={`#${lowercasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
