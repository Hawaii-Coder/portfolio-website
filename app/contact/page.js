import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Ayden Malahoff-Kamei.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <Link className="pageTitle interactive" href="/">
        contact
      </Link>
      <p className="pageBody">Coming soon.</p>
      <footer className="footer">
        <p>&copy; 2026 Ayden Malahoff-Kamei. All rights reserved.</p>
      </footer>
    </main>
  );
}
