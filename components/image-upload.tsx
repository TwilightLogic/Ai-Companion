'use client';

import { useEffect, useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';

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

  // TODO: Upload image bug unfixed
  return (
    <div className='space-y-4 h-full flex flex-col justify-center items-center'>
      <CldUploadButton
        onUpload={(result: any) => onChange(result.info.secure_url)}
        options={{ maxFiles: 1 }}
        uploadPreset='mthueqth'
      >
        <div className='p-4 border-4 border-dashed border-primary/10 rounded-lg hover: opacity-75 transition flex flex-col space-y-2 items-center justify-center'>
          <div className='relative h-40 w-40'>
            <Image
              fill
              alt='Upload'
              src={value || '/placeholder.svg'}
              className='rounded-lg object-cover'
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
