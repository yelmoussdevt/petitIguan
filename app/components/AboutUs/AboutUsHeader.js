import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useScroll, useTransform } from "framer-motion";
import { useTheme } from "@emotion/react";
import styles from "./AboutUs.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function AboutUsHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const translateY = useTransform(scrollYProgress, [0, 1], [10, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      <Parallax speed={-10}>
        <Box
          sx={{
            py: 5,
            // backgroundColor: "background.default",
          }}
          className={styles.aboutContainer}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 5,
              backgroundColor: theme.palette.customColors.green,
            }}
          >
            <motion.div
              className="box"
              style={{
                scale: scaleText,
                translateY: translateY,
                position: "absolute",
                top: 0,
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                textAlign: "center",
                padding: "0 20px",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Typography
                variant="h3"
                style={{ whiteSpace: isMobile ? "normal" : "nowrap" }}
                fontSize={{ xs: 24, md: 52 }}
                fontWeight={"bold"}
                className="TitleHero"
              >
                One spot, one wave, one flow
              </Typography>
            </motion.div>
            {/* <motion.div
            style={{ scale, rotate }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Atropos
              style={{
                borderRadius: 15,
                // padding: 40,
                backgroundColor: "transparent",
              }}
              alwaysActive
              activeOffset={40}
              duration={100}
              rotate
              rotateXMax={25}
              rotateYMax={25}
              shadow={false}
              highlight
            >
              <Image
                src="/logoIguan.png"
                alt="Company Image"
                width={250}
                height={250}
                className={styles.image}
              />
            </Atropos>
          </motion.div> */}
          </Box>
        </Box>
      </Parallax>
    </>
  );
}
