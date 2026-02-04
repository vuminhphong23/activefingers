import SuccessStoryDetail from "@/components/sections/SuccessStoryDetail";

export default function CareSuperWebsite() {
  return (
    <SuccessStoryDetail
      title="CareSuper Website Personalization"
      breadcrumbTitle="CareSuper Website"
      imageUrl="/assets/images/success-story-detail/Screenshot 2025-08-16 201620.jpg"
      client="CareSuper"
      industry="Financial Services – Superannuation (Australia)"
      website="https://www.caresuper.com.au"
      techStack={["Sitecore XP 10.4", "Sitecore Personalize", "Sitecore Send"]}
    >
      <p>
        CareSuper is an award-winning, profit-to-member industry super fund serving more than 550,000 members across Australia. The fund&apos;s mission is to deliver &quot;Service you expect. Care you deserve.&quot;
      </p>
      <p>
        CareSuper sought to enhance member engagement through personalized digital experiences. The project involved revamping their content website and integrating personalization features to deliver tailored content to users—helping members find relevant information about superannuation, investments, insurance, and retirement planning more easily.
      </p>
      <p>
        We delivered a solution powered by Sitecore XP 10.4, Sitecore Personalize, and Sitecore Send, enabling targeted content and communications aligned with member segments and behaviour. The result is a more relevant, engaging experience for members while supporting the fund&apos;s digital and member-communication goals.
      </p>
    </SuccessStoryDetail>
  );
}
