import React, { useState } from 'react';
import { getDriveDirectLink } from '@/lib/drive';
import { cn } from '@/lib/cn';
import { Image as ImageIcon } from 'lucide-react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  wrapperClassName?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, wrapperClassName, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const directSrc = getDriveDirectLink(src);

  return (
    <div className={cn("relative overflow-hidden bg-surfaceHighlight", wrapperClassName)}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-800 flex items-center justify-center z-10">
          <ImageIcon className="text-gray-700 w-8 h-8" />
        </div>
      )}
      
      {/* Fallback for error */}
      {error && (
        <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-textMuted p-4 z-20">
          <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs uppercase tracking-wider">Image Unavailable</span>
        </div>
      )}

      <img
        src={directSrc}
        alt={alt || "Image"}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0",
          error ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
};