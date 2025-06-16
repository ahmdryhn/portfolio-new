import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
};

const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;
