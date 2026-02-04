import SuccessStoryDetail from "@/components/sections/SuccessStoryDetail";

export default function OSIMEcommerceSystem() {
  return (
    <SuccessStoryDetail
      title="OSIM Ecommerce System"
      breadcrumbTitle="OSIM Ecommerce"
      imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
      client="OSIM International"
      industry="Retail – Health & Wellness"
      website="https://www.osim.com"
      techStack={["Sitecore XP 10.0", "Sitecore XC 10.0", "JSS", "SXA", "ReactJS", "Azure App Service"]}
    >
      <p>
        OSIM is a Singapore-based company established in 1980 and is recognised as Asia&apos;s leading brand in massage chairs and wellness products. The brand operates globally with regional ecommerce sites including Singapore, Vietnam (vn.osim.com), Malaysia (osim.com.my), Thailand (osim.co.th), and other markets.
      </p>
      <p>
        The project involved building a scalable ecommerce and content ecosystem to support OSIM&apos;s multi-country digital strategy. The solution needed to manage product catalogs, customer profiles, appointments, and personalised recommendations while keeping data in sync with Sitecore CMS across regions.
      </p>
      <p>
        We delivered a platform powered by Sitecore XP 10.0, Sitecore XC 10.0, JSS, SXA, and ReactJS, hosted on Azure App Service. The system manages customer appointments, retrieves profiles and purchase history, displays product information, offers personalised recommendations, and keeps all data synced from Sitecore—enabling a consistent, localised experience for OSIM customers across multiple countries.
      </p>
    </SuccessStoryDetail>
  );
}
