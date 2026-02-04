import SuccessStoryDetail from "@/components/sections/SuccessStoryDetail";

export default function RabbitGroupWebsite() {
  return (
    <SuccessStoryDetail
      title="Rabbit Group Website"
      breadcrumbTitle="Rabbit Group Website"
      imageUrl="/assets/images/success-story-detail/Screenshot 2025-08-16 201639.jpg"
      client="Rabbit Group (Thailand)"
      industry="Fintech"
      website="https://www.rabbit.co.th"
      techStack={["Sitecore 8", ".NET Framework"]}
    >
      <p>
        Rabbit Group is a financial technology service provider based in Thailand that simplifies digital life services by connecting business partners directly to consumers through its digital platform. The group operates Rabbit Card (payment), Rabbit Rewards, Rabbit Care (insurance), Rabbit Cash (digital lending), and Rabbit Selection (e-commerce).
      </p>
      <p>
        Rabbit.co.th is the official digital presence of Rabbit Group. We implemented a centralized content management system using Sitecore v8 to power the group&apos;s content ecosystem. The CMS enables the management team to write content once and reuse it across web, mobile, email, and apps.
      </p>
      <p>
        The system supports scheduled publishing, expiration dates, translation workflows, and multi-language, multi-site content management in a single backend—helping Rabbit Group maintain a consistent, scalable digital presence across its suite of financial and lifestyle services.
      </p>
    </SuccessStoryDetail>
  );
}
