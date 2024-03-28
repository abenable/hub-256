import { useEffect, useState } from "react";
import BrowseCard from "../../components/cards/browseCard";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import PostCard from "../../components/cards/postCard";
import { Button } from "@material-tailwind/react";

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
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
      <HorizontalCard />
      <BrowseCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            imgurl={post.urlToImage}
            learnMoreUrl={post.url}
            description={post.description}
          />
        ))}
      </div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 cursor-pointer"
        >
          <Button
            size="sm"
            className="p-2  bg-blue-gray-700 text-white rounded"
          >
            Back to top
          </Button>
        </div>
      )}
    </>
  );
}
