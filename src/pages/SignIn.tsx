import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
const promo = "/images/promo.jpg";

type Mode = "login" | "signup" | "forgot";

export default function SignIn() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    window.setTimeout(() => {
      setLoading(false);
      if (mode === "forgot") {
        setMessage("If an account exists, a reset link is on its way.");
      } else if (mode === "signup") {
        setMessage("Account created. Check your inbox to confirm, then book your first class.");
      } else {
        setMessage("Welcome back. Your packages and upcoming classes are ready.");
      }
    }, 900);
  };

  const title = mode === "login" ? "Welcome back!" : mode === "signup" ? "Join the room." : "Reset access.";
  const cta = mode === "login" ? "Log in" : mode === "signup" ? "Create account" : "Send reset link";

  return (
    <div className="relative min-h-[100svh] bg-ink">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
        style={{
          backgroundImage: `linear-gradient(90deg, #110d0d 0%, rgba(17,13,13,0.35) 40%, transparent 70%), url(${promo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 md:px-10">
        <div className="flex h-[76px] items-center justify-between">
          <Logo />
          <Link to="/" className="text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-cream">
            Back to studio
          </Link>
        </div>

        <div className="flex flex-1 items-center py-12">
          <div className="w-full max-w-[420px]">
            <p className="text-[11px] uppercase tracking-[0.36em] text-copper">Momence</p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.06em] md:text-6xl">{title}</h1>
            <p className="mt-3 text-sm text-muted">
              {mode === "login" && "Sign in to book classes, manage packs, and freeze your membership."}
              {mode === "signup" && "Create your Corehaus account to claim intro offers and reserve a machine."}
              {mode === "forgot" && "Enter the email on your account and we will send reset instructions."}
            </p>

            <form onSubmit={submit} className="mt-10 space-y-5">
              {mode === "signup" && (
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted">Full name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-0 border-b border-cream/25 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-muted/50 focus:border-cream"
                    placeholder="Your name"
                  />
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-0 border-b border-cream/25 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-muted/50 focus:border-cream"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </label>

              {mode !== "forgot" && (
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted">Password</span>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-0 border-b border-cream/25 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-muted/50 focus:border-cream"
                    placeholder="••••••••"
                    autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  />
                </label>
              )}

              <Button type="submit" className="mt-4 w-full" disabled={loading}>
                {loading ? "Please wait…" : cta}
              </Button>
            </form>

            {message && (
              <p className="mt-6 border-l-2 border-copper pl-4 text-sm leading-relaxed text-cream-soft">{message}</p>
            )}

            <div className="mt-8 space-y-3 text-sm text-muted">
              {mode === "login" && (
                <>
                  <button onClick={() => setMode("forgot")} className="block transition-colors hover:text-cream">
                    Forgot your password?
                  </button>
                  <p>
                    New here?{" "}
                    <button onClick={() => setMode("signup")} className="text-cream underline-offset-4 hover:underline">
                      Sign up here!
                    </button>
                  </p>
                </>
              )}
              {mode === "signup" && (
                <p>
                  Already have an account?{" "}
                  <button onClick={() => setMode("login")} className="text-cream underline-offset-4 hover:underline">
                    Log in
                  </button>
                </p>
              )}
              {mode === "forgot" && (
                <button onClick={() => setMode("login")} className="transition-colors hover:text-cream">
                  Back to log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
