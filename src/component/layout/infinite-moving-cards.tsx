"use client";

import { cn } from "./cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden  [mask-image:linear-gradient(to_left,transparent,white_10%,white_200%,transparent)] bg-gradient-to-r from-indigo-900 to-purple-800",
        className
      )}
    >
      <p className="flex text-4xl my-8 justify-center text-white font-bold">What is everyone saying?</p>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim mauris nec tellus pulvinar, ac lacinia ligula dictum.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  John Doe
                </span>
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  CEO, Company Inc.
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim mauris nec tellus pulvinar, ac lacinia ligula dictum.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  John Doe
                </span>
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  COCA, Company Inc.
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim mauris nec tellus pulvinar, ac lacinia ligula dictum.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  John Doe
                </span>
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  PEPSI, Company Inc.
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim mauris nec tellus pulvinar, ac lacinia ligula dictum.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  John Doe
                </span>
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  FACEBOOK, Company Inc.
                </span>
              </span>
            </div>
          </blockquote>
        </li>
        
      </ul>
    </div>
  );
};
