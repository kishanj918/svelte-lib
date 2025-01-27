export enum TagSizes {
  TINY,
  SMALL,
  MEDIUM,
  LARGE
}

export const sizes: Record<TagSizes, string> = {
  [TagSizes.TINY]: 'h-4 px-1',
  [TagSizes.SMALL]: 'h-6 px-2',
  [TagSizes.MEDIUM]: 'h-8 px-3',
  [TagSizes.LARGE]: 'h-10 px-4'
};

export const crossPad: Record<TagSizes, string> = {
  [TagSizes.TINY]: 'ml-1',
  [TagSizes.SMALL]: 'ml-2',
  [TagSizes.MEDIUM]: 'ml-3',
  [TagSizes.LARGE]: 'ml-4'
};
