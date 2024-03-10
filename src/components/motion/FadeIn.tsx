import Motion from "@/components/motion/Motion";

export default function FadeIn(props: any) {
  return (
    <Motion
      {...props}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    />
  );
}
