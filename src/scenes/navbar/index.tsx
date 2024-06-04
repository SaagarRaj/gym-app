import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div className={`${flexbetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexbetween} mx-auto w-5/6`}>
          <div className={`${flexbetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexbetween} w-full `}>
                {/* Inner Left Side */}
                <div className={`${flexbetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Benefits"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Our Classes"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Contact Us"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                </div>
                {/* Inner Right Side */}
                <div className={`${flexbetween} gap-8`}>
                  <p> Sign In </p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    {" "}
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && <div></div>}
    </nav>
  );
};

export default Navbar;
