import "./globals.css";

export const metadata = {
  title: "KanBan - A project management tool for sonic mosaic band",
  description: "A project management tool for sonic mosaic band",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
