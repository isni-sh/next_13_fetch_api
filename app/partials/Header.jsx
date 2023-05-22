import Link from "next/link";

const Header = () => {
  return (
    <header className="container flex justify-between py-4">
      <h3>Logo</h3>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
