export enum ActionSizes {
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE
}

export const Sizes: Record<ActionSizes, string> = {
  [ActionSizes.SMALL]: 'h-6 rounded-md px-2 text-sm',
  [ActionSizes.MEDIUM]: 'h-8 rounded-md px-3 text-sm',
  [ActionSizes.LARGE]: 'h-10 rounded-md px-4 text-sm',
  [ActionSizes.EXTRA_LARGE]: 'h-14 rounded-md px-4 text-lg'
};
export const TextSizes: Record<ActionSizes, string> = {
  [ActionSizes.SMALL]: 'h-6 rounded-md px-1 text-sm',
  [ActionSizes.MEDIUM]: 'h-8 rounded-md px-1.5 text-lg',
  [ActionSizes.LARGE]: 'h-10 rounded-md px-2 text-2xl',
  [ActionSizes.EXTRA_LARGE]: 'h-14 rounded-md px-2 text-2xl'
};

export const IconSizes: Record<ActionSizes, string> = {
  [ActionSizes.SMALL]: 'h-6 w-6 rounded-md',
  [ActionSizes.MEDIUM]: 'h-8 w-8 rounded-md',
  [ActionSizes.LARGE]: 'h-10 w-10 rounded-md',
  [ActionSizes.EXTRA_LARGE]: 'h-14 w-14 rounded-md'
};

export const leftIconPad: Record<ActionSizes, string> = {
  [ActionSizes.SMALL]: 'mr-2',
  [ActionSizes.MEDIUM]: 'mr-3',
  [ActionSizes.LARGE]: 'mr-4',
  [ActionSizes.EXTRA_LARGE]: 'mr-6'
};

export const rightIconPad: Record<ActionSizes, string> = {
  [ActionSizes.SMALL]: 'ml-2',
  [ActionSizes.MEDIUM]: 'ml-3',
  [ActionSizes.LARGE]: 'ml-4',
  [ActionSizes.EXTRA_LARGE]: 'ml-6'
};
