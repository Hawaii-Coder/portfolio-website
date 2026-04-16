import Link from "next/link";

export const metadata = {
  title: "login",
};

export default function LoginPage() {
  return (
    <main className="page loginPage">
      <header className="loginHeader">
        <Link href="/" className="pageTitle interactive">
          login
        </Link>
      </header>

      <a
        className="githubLoginBtn"
      >
        <img src='/github-brands-solid-full.svg' alt="" width={30} height={30} />
        Sign in with GitHub
      </a>

      
    </main>
  );
}
