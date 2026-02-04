import SuccessStoryDetail from "@/components/sections/SuccessStoryDetail";

export default function ToyotaAndLexus() {
  return (
    <SuccessStoryDetail
      title="Toyota & Lexus Australia Digital Platform"
      breadcrumbTitle="Toyota & Lexus Australia"
      imageUrl="/assets/images/success-story-detail/Screenshot 2025-08-16 201552.jpg"
      client="Toyota & Lexus Australia"
      industry="Automotive Retail"
      website="https://www.lexus.com.au"
      techStack={["Sitecore XP 10.4", "Sitecore JSS with Next.js", "Azure App Service", "Sitecore Discover", "Sitecore OrderCloud (Catalog Sync)"]}
    >
      <p>
        Toyota and Lexus Australia aimed to unify their digital presence across all dealerships and national landing pages. The goal was to provide a consistent, high-quality experience for customers researching vehicles, locating dealers, and booking test drives—while supporting both national campaigns and local dealer sites.
      </p>
      <p>
        Over a 12-month period, we launched more than 20 dealer-specific websites and national landing pages on a modern, scalable stack. The solution is built on Sitecore XP 10.4 with Sitecore JSS and Next.js for headless delivery, hosted on Azure App Service. Sitecore Discover supports product and content discovery, and Sitecore OrderCloud is used for catalog sync where required.
      </p>
      <p>
        The platform enables Toyota and Lexus Australia to manage content centrally, deploy dealer and campaign sites quickly, and deliver a seamless experience from research to dealer visit and test drive—strengthening the brand&apos;s digital footprint across Australia.
      </p>
    </SuccessStoryDetail>
  );
}
