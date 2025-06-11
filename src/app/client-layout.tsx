"use client";

import Cursor from "../components/Elements/Cursor";
import Footer from "../components/Navigation/Footer";
import Nav from "../components/Navigation/Nav";
import { useCursorSection } from "../../hooks/useCursorSection";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const currentSection = useCursorSection();

  return (
    <>
      {children}
      <Nav />
      <Footer />
      <Cursor section={currentSection} />
    </>
  );
} 