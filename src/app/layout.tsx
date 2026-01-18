import "./globals.css";
import { Sidebar } from "../components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
