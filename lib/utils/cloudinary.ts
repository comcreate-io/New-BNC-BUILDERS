// BNC Builders - Cloudinary Utilities

import { CLOUDINARY_BASE_URL } from '../constants/images';

interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
}

export function buildCloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
): string {
  const transforms: string[] = [];

  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.quality) transforms.push(`q_${options.quality}`);
  if (options.format) transforms.push(`f_${options.format}`);
  if (options.crop) transforms.push(`c_${options.crop}`);
  if (options.gravity) transforms.push(`g_${options.gravity}`);

  const transformString = transforms.length > 0 ? transforms.join(',') + '/' : '';

  return `${CLOUDINARY_BASE_URL}/${transformString}${publicId}`;
}

export function getResponsiveImageProps(publicId: string, alt: string) {
  return {
    src: buildCloudinaryUrl(publicId, { quality: 'auto', format: 'auto' }),
    alt,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  };
}
