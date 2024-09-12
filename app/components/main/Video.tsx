"use client";
import { useEffect, useState } from "react";

const Video = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] left-0 z-0 w-full h-full object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default Video;
