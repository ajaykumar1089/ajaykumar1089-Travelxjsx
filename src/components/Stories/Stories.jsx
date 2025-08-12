
import React, { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "mock_unsplash_key"; // Replace with real key
const YOUTUBE_API_KEY = "mock_youtube_key"; // Replace with real key
const STORIES_PER_PAGE = 10;

const TravelStories = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const unsplashRes = await axios.get(
          `https://api.unsplash.com/search/photos?query=travel&per_page=100&client_id=${UNSPLASH_ACCESS_KEY}`
        );

        const youtubeRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel vlog&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`
        );

        const storiesData = unsplashRes.data.results.slice(0, 100).map((img, index) => {
          const video = youtubeRes.data.items[index % youtubeRes.data.items.length];
          return {
            id: index + 1,
            title: video.snippet.title,
            location: img.user.location || "Unknown",
            image: img.urls.small,
            videoUrl: `https://www.youtube.com/embed/${video.id.videoId}`,
            description: video.snippet.description || "No description available.",
          };
        });

        setStories(storiesData);
      } catch (error) {
        console.error("Failed to fetch travel stories:", error);
      }
    };

    fetchStories();
  }, []);

  const indexOfLastStory = currentPage * STORIES_PER_PAGE;
  const indexOfFirstStory = indexOfLastStory - STORIES_PER_PAGE;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);
  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        ðŸŒ Real-Time Traveller Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{story.title}</h2>
              <p className="text-sm text-gray-500">{story.location}</p>
              <p className="mt-2 text-gray-600 line-clamp-2">{story.description}</p>
              <div className="mt-4 aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full"
                  src={story.videoUrl}
                  title={story.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TravelStories;
