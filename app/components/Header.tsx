import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/presentation", label: "Presentation" },
    { path: "/achievements", label: "Achievements" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            이해람
          </Link>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

