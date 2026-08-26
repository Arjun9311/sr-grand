"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </MotionConfig>
  );
}
