"use client";

import React, { memo } from "react";

import { cn } from "~/lib/utils";

type PageContainerProps = React.HTMLAttributes<HTMLDivElement>;

const PageContainer = memo(
  ({ className, children, ...rest }: PageContainerProps) => {
    return (
      <main
        className={cn("container max-w-[1600px] px-[1rem] py-6 ", className)}
        {...rest}
      >
        <div className={"flex flex-col items-start gap-3 w-full"}>
          {children}
        </div>
      </main>
    );
  },
);
PageContainer.displayName = "PageContainer";

export default PageContainer;
