import Image from "next/image";
import React from "react";

export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="/lexon_logo.png"
        alt="Lexon Appliance Logo"
        width={130}
        height={40}
        priority
      />
    </div>
  );
}