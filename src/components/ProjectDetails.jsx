"use client";
import React from "react";
import Image from "next/image";
import ContentAndMediaElement from "./ContentAndMediaElement";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = ({
  logo,
  name,
  username,
  description,
  duration,
  content,
  images = [],
  videos = [],
  demo,
  github,
  imgViewerIndex,
  imgViewerSources,
  setImgViewerSources,
  setImgViewerIndex,
}) => {
  return (
    <div className=" w-full md:max-w-xl">
      <div className="border bg-sky-100 dark:bg-slate-950 relative shadow-sm shadow-blue-300 dark:shadow-blue-950 rounded-xl border-slate-700">
        <div className="flex justify-between items-center px-3 pt-1 rounded-2xl">
          {/* HEADING BAR STARTS HERE */}
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-2">
              <div className="flex-shrink-0 my-2 ">
                <Image
                  width={56}
                  height={56}
                  src={logo}
                  alt="profile"
                  className="!size-14 !object-cover rounded-2xl border-2 border-slate-500"
                />
              </div>
              <div className="mx-1 leading-snug mt-1 hidden xs:block max-w-96">
                <div className="flex justify-center flex-col">
                  <h1 className="font-semibold leading-non truncate xs:w-[44vw] xs2:w-[49vw] xs3:w-[52vw] xs4:w-[58vw] xs5:w-[62vw] sm:w-[45vw] md:w-[52vw] break-all">
                    {name}
                  </h1>
                  <p className="text-[14px] truncate xs:w-[44vw] xs2:w-[49vw] xs3:w-[52vw] xs4:w-[58vw] xs5:w-[62vw] xs6:w-[70vw] sm:w-[45vw] max-w-96 md:w-[52vw] break-all ">
                    {description}
                  </p>
                  <div className="flex items-center gap-1 truncate xs:w-[44vw] xs2:w-[49vw] xs3:w-[52vw] xs4:w-[58vw] xs5:w-[62vw] xs6:w-[70vw] sm:w-[45vw] max-w-fit md:w-[52vw] ">
                    <h1 className="text-gray-600 dark:text-gray-500 font-semibold text-[14px] xs:hidden xs1:block truncate xs:w-[40vw] xs2:w-[45vw] xs3:w-[50vw] xs4:w-[58vw] xs5:w-[62vw] xs6:w-[70vw] sm:w-[45vw] md:w-[35vw] max-w-fit break-all ">
                      <span className="font-sans text-[15px]">@</span>
                      {username}
                    </h1>
                    <span className="mx-1 text-slate-500 hidden xs2:block">
                      •
                    </span>
                    <h1 className="text-sm">{duration}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEADING BAR ENDS HERE */}
        </div>
        <hr className="mx-4 mt-1 border-slate-700" />

        <div className="px-4 pt-3 w-full">
          {/*  ProjectDetails CONTENT AND MEDIA STARTS HERE  */}
          <ContentAndMediaElement
            content={content}
            images={images}
            videos={videos}
            imgViewerIndex={imgViewerIndex}
            imgViewerSources={imgViewerSources}
            setImgViewerIndex={setImgViewerIndex}
            setImgViewerSources={setImgViewerSources}
          />
          {/*  ProjectDetails CONTENT AND MEDIA ENDS HERE  */}
        </div>

        <hr className="mx-4 border-slate-700" />
        <div className="flex w-full justify-between items-center px-4 sm:px-10 py-3">
          <Link href={demo} target="_blank" className="flex gap-2 items-center w-full justify-center hover:bg-gray-400 dark:hover:bg-gray-800 rounded-xl">
            <FaExternalLinkAlt className="-mt-1" /> Live Demo
          </Link>
          <Link href={github} target="_blank" className="flex gap-2 items-center w-full justify-center hover:bg-gray-400 dark:hover:bg-gray-800 rounded-xl">
            <FaGithub className="-mt-[1px]" /> Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
