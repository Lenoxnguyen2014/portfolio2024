import Link from "next/link";

const NavBar = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/myyoutube', label: 'My Youtube' },
        { href: '/resume', label: 'About Me' },
        { href: '/blogs', label: 'Blogs'},
        { href: '/contact', label: 'Contact'}
      ]
    return (
        <nav className="bg-gray-200/50 fixed top-0 left-0 right-0 z-10">
        <ul className="grid grid-cols-5 gap-1 content-center">
          {links.map(({ href, label }) => (
            <li key={href} className="px-4 text-sm md:text-2xl ">
              <Link className="active:bg-sky-100" href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default NavBar