import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import ECertificateForm from "@/components/ECertificate/ECertificateForm";
import HeroBgImage from "@/components/Hero/HeroBg";

const ECertificatePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-scroll bg-black">
      <AnimatedGridWrapper />
      <HeroBgImage />
      <div className="top-element relative flex min-h-screen w-full items-center justify-center">
        <ECertificateForm />
      </div>
    </div>
  );
};

export default ECertificatePage;
