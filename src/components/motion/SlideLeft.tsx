import Motion from "@/components/motion/Motion";

export default function SlideLeft(props: any) {
  return (
    <Motion
      {...props}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    />
  );
}
