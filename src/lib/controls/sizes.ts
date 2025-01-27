export enum SegmentOptionSize {
  LARGE,
  EXTRA_LARGE
}

export const sizes: Record<SegmentOptionSize, string> = {
  [SegmentOptionSize.LARGE]: 'h-8 text-sm',
  [SegmentOptionSize.EXTRA_LARGE]: 'h-14 rounded-md px-6 text-lg'
};
