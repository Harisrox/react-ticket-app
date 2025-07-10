import { Home, Ticket } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4 ">
        <Link href="/">
          <Home className="text-default-text" />
        </Link>
        <Link href="/TicketPage/new">
          <Ticket className="text-default-text" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">john@email.com</p>
      </div>
    </nav>
  );
};

export default Nav;
