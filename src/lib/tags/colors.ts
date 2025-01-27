export enum TagColors {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
  PINK,
  GREY,
  LIGHT_GREY,
  DARK_GREY
}

export const colors: Record<TagColors, string> = {
  [TagColors.RED]:
    'bg-rainbow-red-1 border-rainbow-red-2 dark:bg-rainbow-red-7 dark:border-rainbow-red-8',
  [TagColors.ORANGE]:
    'bg-rainbow-orange-1 border-rainbow-orange-2 dark:bg-rainbow-orange-7 dark:border-rainbow-orange-8',
  [TagColors.YELLOW]:
    'bg-rainbow-yellow-1 border-rainbow-yellow-2 dark:bg-rainbow-yellow-7 dark:border-rainbow-yellow-8',
  [TagColors.GREEN]:
    'bg-rainbow-green-1 border-rainbow-green-2 dark:bg-rainbow-green-7 dark:border-rainbow-green-8',
  [TagColors.BLUE]:
    'bg-rainbow-blue-1 border-rainbow-blue-2 dark:bg-rainbow-blue-7 dark:border-rainbow-blue-8',
  [TagColors.PURPLE]:
    'bg-rainbow-purple-1 border-rainbow-purple-2 dark:bg-rainbow-purple-7 dark:border-rainbow-purple-8',
  [TagColors.PINK]:
    'bg-rainbow-pink-1 border-rainbow-pink-2 dark:bg-rainbow-pink-7 dark:border-rainbow-pink-8',
  [TagColors.GREY]: 'bg-light-grey-1 border-grey-1 dark:bg-grey-7 dark:border-grey-7',
  [TagColors.LIGHT_GREY]: '',
  [TagColors.DARK_GREY]: ''
};

export const activeColors: Record<TagColors, string> = {
  [TagColors.RED]:
    'hover:bg-rainbow-red-2 hover:border-rainbow-red-3 active:bg-rainbow-red-3 active:border-rainbow-red-4 dark:hover:bg-rainbow-red-6 dark:hover:border-rainbow-red-7 dark:active:bg-rainbow-red-5 dark:active:border-rainbow-red-6',
  [TagColors.ORANGE]:
    'hover:bg-rainbow-orange-2 hover:border-rainbow-orange-3 active:bg-rainbow-orange-3 active:border-rainbow-orange-4 dark:hover:bg-rainbow-orange-6 dark:hover:border-rainbow-orange-7 dark:active:bg-rainbow-orange-5 dark:active:border-rainbow-orange-6',
  [TagColors.YELLOW]:
    'hover:bg-rainbow-yellow-2 hover:border-rainbow-yellow-3 active:bg-rainbow-yellow-3 active:border-rainbow-yellow-4 dark:hover:bg-rainbow-yellow-6 dark:hover:border-rainbow-yellow-7 dark:active:bg-rainbow-yellow-5 dark:active:border-rainbow-yellow-6',
  [TagColors.GREEN]:
    'hover:bg-rainbow-green-2 hover:border-rainbow-green-3 active:bg-rainbow-green-3 active:border-rainbow-green-4 dark:hover:bg-rainbow-green-6 dark:hover:border-rainbow-green-7 dark:active:bg-rainbow-green-5 dark:active:border-rainbow-green-6',
  [TagColors.BLUE]:
    'hover:bg-rainbow-blue-2 hover:border-rainbow-blue-3 active:bg-rainbow-blue-3 active:border-rainbow-blue-4 dark:hover:bg-rainbow-blue-6 dark:hover:border-rainbow-blue-7 dark:active:bg-rainbow-blue-5 dark:active:border-rainbow-blue-6',
  [TagColors.PURPLE]:
    'hover:bg-rainbow-purple-2 hover:border-rainbow-purple-3 active:bg-rainbow-purple-3 active:border-rainbow-purple-4 dark:hover:bg-rainbow-purple-6 dark:hover:border-rainbow-purple-7 dark:active:bg-rainbow-purple-5 dark:active:border-rainbow-purple-6',
  [TagColors.PINK]:
    'hover:bg-rainbow-pink-2 hover:border-rainbow-pink-3 active:bg-rainbow-pink-3 active:border-rainbow-pink-4 dark:hover:bg-rainbow-pink-6 dark:hover:border-rainbow-pink-7 dark:active:bg-rainbow-pink-5 dark:active:border-rainbow-pink-6',
  [TagColors.GREY]:
    'hover:bg-light-grey-2 active:bg-grey-1 active:border-grey-2 dark:hover:bg-grey-6 dark:hover:border-grey-5 dark:active:bg-grey-5 dark:active:border-grey-4',
  [TagColors.LIGHT_GREY]: '',
  [TagColors.DARK_GREY]: ''
};
