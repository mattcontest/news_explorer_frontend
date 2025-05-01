// import { BASE_URL } from "./constants";

const articlesPreset = [
  {
    name: "Gizmodo.com",
    keyword: "Nature",
    author: "Margherita Bassi",
    title:
      "Tourists Watch in Horror as 60 Orcas Rip Apart Endangered Blue Whale ",
    description:
      "The episode, witnessed off the Australian coast, offers a rare glimpse into the brutal efficiency of the ocean’s top predator.",
    url: "https://gizmodo.com/tourists-watch-in-horror-as-60-orcas-rip-apart-endangered-blue-whale-2000588174",
    urlToImage: "https://gizmodo.com/app/uploads/2025/04/orcas.jpg",
    publishedAt: "2025-04-08T20:15:00Z",
    content:
      "Every summer, an area of deep underwater canyons off western Australia’s south coast called Bremer Canyon becomes the preferred feeding ground for marine predators including sharks, pilot whales, bea… [+2387 chars]",
  },
  {
    name: "Gizmodo.com",
    keyword: "Nature",
    author: "Ed Cara",
    title:
      "Anthrax Outbreak Kills at Least 50 Hippos in Africa’s Oldest National Park",
    description:
      "At least 50 hippos and other large animals at Virunga National Park in the DRC are thought to be killed by the bacterial disease.",
    url: "https://gizmodo.com/anthrax-outbreak-kills-at-least-50-hippos-in-africas-oldest-national-park-2000586587",
    urlToImage: "https://gizmodo.com/app/uploads/2025/04/hippos-1.jpg",
    publishedAt: "2025-04-08T20:15:00Z",
    content:
      "Anthrax has caused a mass die-off of hippos living inside Africa’s oldest nature reserve in the Democratic Republic of Congo. Officials at Virunga National Park report that at least 50 hippos, along … [+2326 chars]",
  },
  {
    name: "Yanko Design",
    author: "JC Torres",
    keyword: "Nature",

    title: "Tronco Is A Nature-Inspired Storage Design That Stacks Like Magic",
    description:
      "Tronco Is A Nature-Inspired Storage Design That Stacks Like MagicEver wished your storage solutions could be as beautiful as they are practical? Meet Tronco, the delightfully innovative container that brings the organic charm of...",
    url: "https://www.yankodesign.com/2025/04/12/tronco-is-a-nature-inspired-storage-design-that-stacks-like-magic/",
    urlToImage:
      "https://www.yankodesign.com/images/design_news/2025/04/tronco-is-a-nature-inspired-storage-design-that-stacks-like-magic/tronco-stackable-storage-01.jpg",
    publishedAt: "2025-04-12T23:30:15Z",
    content:
      "Ever wished your storage solutions could be as beautiful as they are practical? Meet Tronco, the delightfully innovative container that brings the organic charm of forest life into your home. Inspire… [+2866 chars]",
  },
];

function checkResponse(res) {
  if (res.ok) {
    console.log("cargo", res);
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articlesPreset);
    }, 500);
  });
};

export { checkResponse, getArticles };
