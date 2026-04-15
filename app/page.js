import Link from "next/link";
import TypedH1 from "./components/TypedH1";

export default function Home() {
  return (
    <main className="home">
      <TypedH1 text="amk.codes" />

      <nav className="navList" aria-label="Primary">
        <Link className="interactive navItem" href="/projects">
          projects
        </Link>
        <Link className="interactive navItem" href="/resume">
          resume
        </Link>
        <Link className="interactive navItem" href="/contact">
          contact
        </Link>
      </nav>

      <footer className="footer">
        <p>&copy; 2026 Ayden Malahoff-Kamei. All rights reserved.</p>
      </footer>
    </main>
  );
}
