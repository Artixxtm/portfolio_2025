import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const ProjectCard = ({ data }) => {
  return (
    <Link
      href={data.link}
      target="_blank"
      className="w-full h-auto flex flex-col gap-4 relative group overflow-hidden"
    >
      <div className="w-full h-[400px] overflow-hidden group">
        <Image
          src={data.src}
          alt={data.fullTitle}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        />
      </div>
      <div className="w-full flex h-auto justify-between items-center">
        <h2 className="mainFont2 text-lg">{data.title}</h2>
        <span className="fontMain5">{data.category}</span>
      </div>

      <span className="absolute left-2 top-2 text-sm fontMain6 mix-blend-difference">
        {data.date}
      </span>
      <span className="absolute right-2 -top-6 group-hover:top-2 transition-[top] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] text-sm fontMain6 mix-blend-difference">
        <RiArrowRightUpLine />
      </span>
    </Link>
  );
};

export default ProjectCard;
