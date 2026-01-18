import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Products", href: "/products" },
  { label: "Sales", href: "/sales" },
  { label: "Insights", href: "/insights" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">RetailIQ</h2>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded px-3 py-2 hover:bg-slate-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
