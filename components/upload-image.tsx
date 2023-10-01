'use client';

import { useEffect, useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disable?: boolean;
}

export const ImageUpload = ({ value, onChange, disable }: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='space-y-4 h-full flex flex-col justify-center items-center'>
      <CldUploadButton></CldUploadButton>
    </div>
  );
};
