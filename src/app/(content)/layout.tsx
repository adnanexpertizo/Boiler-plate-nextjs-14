import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main> {children}</main>
      <Footer />
    </>
  );
}
