import { Typography } from "@/components/atoms/Typography";

interface VideoSectionProps {
  youtubeUrl?: string | null;
}

export function VideoSection({ youtubeUrl }: VideoSectionProps) {
  if (!youtubeUrl) return null;

  // Extract video ID from youtube URL
  const videoIdMatch = youtubeUrl.match(/(?:(?:v=)|(?:youtu\.be\/))([a-zA-Z0-9_-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  if (!videoId) return null;

  return (
    <div className="mt-16 flex flex-col gap-6">
      <Typography variant="h3">Video Tutorial</Typography>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg bg-gray-900 border border-gray-200">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
