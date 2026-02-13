import { useLenis } from "../../hooks/useLenis";
import { useActiveSection } from "../../hooks/useActiveSection";
import Header from "./Header";
import CustomCursor from "../ui/CustomCursor";
import AccentToggle from "../ui/AccentToggle";
import PageLoader from "../ui/PageLoader";
import ScrollProgress from "../ui/ScrollProgress";

export default function Layout({ children }) {
  useLenis();
  const activeSection = useActiveSection();

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Header activeSection={activeSection} />
      <main id="main-content">{children}</main>
      <AccentToggle />
    </>
  );
}
