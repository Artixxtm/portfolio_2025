"use client";

import dynamic from "next/dynamic";

const PageWrapper = dynamic(() => import("@/components/PageWrapper"), {
  ssr: false,
});


export default function Home() {

  return (
    <>
      <PageWrapper />
    </>
  );
}
