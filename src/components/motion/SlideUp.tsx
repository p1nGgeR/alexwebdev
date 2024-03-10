import Motion from "@/components/motion/Motion";

export default function SlideUp(props: any) {
  return (
    <Motion
      {...props}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    />
  );
}
