"use client";
import React, { ElementType } from "react";
import {
  domAnimation,
  LazyMotion,
  m,
  MotionProps,
  useReducedMotion,
} from "framer-motion";

export default function Motion({
  as: AsComponent = "div",
  ...props
}: MotionProps & { as: ElementType } & any) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <AsComponent {...props} />;
  }

  // eslint-disable-next-line react/display-name
  const Component = React.forwardRef((props, ref) => (
    <AsComponent ref={ref} {...props} />
  ));
  const MotionComponent = m(Component);

  return (
    <LazyMotion features={domAnimation}>
      <MotionComponent {...props} />
    </LazyMotion>
  );
}
