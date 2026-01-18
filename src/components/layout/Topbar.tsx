export function Topbar({ title }: { title: string }) {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="border rounded px-3 py-1 text-sm">
          Last 7 Days
        </button>
        <button className="border rounded px-3 py-1 text-sm">
          All Stores
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-sm">
          PT
        </div>
      </div>
    </header>
  );
}
