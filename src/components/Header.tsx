import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link className="header" href="/">
        <Image alt="sdf" src="espn.svg" width={190} height={200} priority={true} />
      </Link>
      <div className="link-container">

      </div>
    </header>
  );
};

export default Header;
