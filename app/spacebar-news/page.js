import SuccessStoryDetail from "@/components/sections/SuccessStoryDetail";

export default function SpacebarNews() {
  return (
    <SuccessStoryDetail
      title="Spacebar News Platform"
      breadcrumbTitle="Spacebar News"
      imageUrl="/assets/images/success-story-detail/Screenshot 2025-08-16 201516.jpg"
      client="Spacebar News (Thailand)"
      industry="Media"
      website="https://spacebar.th"
      techStack={["Sitecore XP", "Personalization Module"]}
    >
      <p>
        Spacebar (spacebar.th) is a Thai digital news platform that brands itself as &quot;The new dimension of NEWS.&quot; It focuses on in-depth, data-driven journalism across politics, society, economy, and culture, with an innovative approach to storytelling and reader engagement.
      </p>
      <p>
        The platform required a personalised content delivery system to align with its editorial mission and engage diverse reader segments. We implemented a solution that delivers personalised content based on user behaviour, location, and profile—helping readers discover the most relevant stories while supporting the outlet&apos;s growth and retention goals.
      </p>
      <p>
        Built on Sitecore XP with a personalization module, the system allows the editorial team to manage content in one place while serving tailored experiences to different audiences. The result is a modern, scalable news platform that combines strong journalism with smart, data-informed content delivery.
      </p>
    </SuccessStoryDetail>
  );
}
