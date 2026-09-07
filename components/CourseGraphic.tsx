import Image from "next/image";
import Box from "@mui/material/Box";

type CourseGraphicProps = {
  courseId: string;
};

const illustrationByCourse: Record<string, string> = {
  "ai-engineering": "/course-illustrations/ai-engineering-3d.png",
  "generative-ai-content": "/course-illustrations/generative-ai-3d.png",
  "ai-data-analytics": "/course-illustrations/ai-data-analytics-3d.png",
};

export function CourseGraphic({ courseId }: CourseGraphicProps) {
  const illustration =
    illustrationByCourse[courseId] ?? illustrationByCourse["ai-data-analytics"];

  return (
    <Box
      aria-hidden="true"
      sx={{
        height: { xs: 132, md: 144 },
        p: { xs: 2.25, md: 2.5 },
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          className="course-illustration-image"
          src={illustration}
          alt=""
          fill
          sizes="(max-width: 899px) calc(100vw - 96px), 360px"
          style={{ objectFit: "contain", transform: "scale(1.43)", transition: "transform 220ms ease" }}
        />
      </Box>
    </Box>
  );
}
