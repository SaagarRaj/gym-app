import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexbetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexbetween} mx-auto w-5/6`}>
          <div className={`${flexbetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />
            {/* Right Side */}
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
                <p> Become a member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
