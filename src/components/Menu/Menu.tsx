export function Menu() {
  const links = [
    { label: "Inicio", icon: "🏠", href: "https://imadrics.me" },
    { label: "Buscar", icon: "🔍", href: "#" },
    { label: "Tu biblioteca", icon: "📚", href: "#" },
  ];

  return (
    <nav className="space-y-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="flex items-center gap-3 text-spotimy-gray-light hover:text-spotimy-white transition-colors duration-200 rounded hover:bg-spotimy-green-medium"
        >
          <span className="text-xl">{l.icon}</span>
          <span className="font-medium">{l.label}</span>
        </a>
      ))}
    </nav>
  );
}
