import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexbetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexbetween} fixed top-0 z-30 w-full py-6 `}
      >
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
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className={`${flexbetween} w-full `}>
            {/* Inner Left Side */}
            <div className="ml-[33%] flex flex-col gap-10 text-xl">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
