import Link from "next/link";
import React from "react";

interface SandBoxLinkListProps {
  link: string;
  title: string;
  description: string;
}

export const SandBoxLinkList: React.FC<SandBoxLinkListProps> = ({
  link,
  title,
  description,
}) => {
  return (
    <Link
      className="flex h-40 max-w-md flex-col gap-4 rounded-lg border border-black bg-white/10 p-4 text-black"
      href={link}
      target="_blank"
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-lg">{description}</div>
    </Link>
  );
};
