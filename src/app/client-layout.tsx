"use client";

import { ReactNode } from "react";
import Cursor from "../components/Elements/Cursor";
import Footer from "../components/Navigation/Footer";
import Nav from "../components/Navigation/Nav";

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      {children}
      <Nav />
      <Footer />
      <Cursor />
    </>
  );
} 