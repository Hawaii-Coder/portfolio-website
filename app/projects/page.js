import Link from "next/link";

export const metadata = {
  title: "projects",
};

export default function ProjectsPage() {
  return (
    <main className="page">
      <Link className="pageTitle interactive" href="/">
      projects
      </Link>
      <p className="pageBody">Coming soon.</p>
      <footer className="footer">
        <p>&copy; 2026 Ayden Malahoff-Kamei. All rights reserved.</p>
      </footer>
    </main>
  );
}
