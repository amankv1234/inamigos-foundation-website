import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/shared/PageTransition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="cinematic-section flex min-h-screen flex-col">
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </div>
  );
}
