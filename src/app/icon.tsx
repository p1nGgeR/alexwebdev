import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: colors.slate[900],
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.slate[100],
        }}
      >
        AS
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  );
}
