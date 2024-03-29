import BrowseCard from "../../components/cards/browseCard";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import PostCard from "../../components/cards/postCard";

export default function IndexPage() {
  const post1 = {
    title: "Lyft launching cross-platform service this week",
    category: "Tech",
    imgurl:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    learnMoreUrl: "#",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story — and not even the biggest part. Autodesk is a company",
  };
  const posts = [
    {
      id: 1,
      title:
        "Woman announces her own death in social media post gone viral: 'Cherish every moment'",
      description:
        "Daniella Thackray, a woman who recently died from a rare, aggressive form of cancer while in her 20s, had her final message shared on social media which details how much she loved life.",
      url: "https://www.foxnews.com/lifestyle/woman-announces-death-social-media-post-gone-viral-cherish-moment",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/Daniella-Thackray-split.jpg",
    },
    {
      id: 2,
      title:
        "Sony Beta Testing New PS5 Explore Tab With Backgrounds, Widgets, and More - PlayStation LifeStyle",
      description:
        "Sony Beta Testing New PS5 Explore Tab With Backgrounds, Widgets, and MorePlayStation LifeStyle Your PS5's Next Update Is Going to Be a Big OneLifehacker PlayStation 5 getting huge update completely overhauling the UIGAMINGbible PS5 system update adds DualSens…",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=173345341",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-a5f5qzztt-1711060487561.jpg?quality=75&strip=all&1711048800&w=1024",
    },
    // Add more posts as needed
  ];

  return (
    <>
      <HorizontalCard post={post1} />
      <BrowseCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
