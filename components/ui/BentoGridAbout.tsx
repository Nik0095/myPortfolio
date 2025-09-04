"use client";

import { cn } from "@/lib/utils";
import React from "react";

// типи пропсів
type BentoGridAboutProps = {
  className?: string;
  cols?: string;
  children?: ReactNode;
};

type BentoGridAboutItemProps = {
  className?: string;
  children?: ReactNode;
};

export const BentoGridAbout = ({
  className,
  cols,
  children,
}: {
  className?: string;
  cols?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 lg:gap-8 mx-auto",
        cols,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridAboutItem = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
