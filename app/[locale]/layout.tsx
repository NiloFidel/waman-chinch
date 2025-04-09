// components/LayoutWrapper.tsx
"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar/navbar";


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = params.locale as 'es' | 'en';

  return (
    <>
      <Navbar locale={locale} />
      {children}
    </>
  );
}