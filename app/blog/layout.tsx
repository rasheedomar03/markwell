import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 80, minHeight: "100vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
