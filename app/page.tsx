import { Capabilities, CaseStudy, Education, Hero, SelectedProjects } from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <CaseStudy />
      <Capabilities />
      <Education />
      <SiteFooter />
    </>
  );
}
