import type { AppTextColors, AppTextDarkColors } from '$components/colors';

export const DisabledStyle =
  'disabled:border-grey-1 disabled:bg-light-grey-1 disabled:text-grey-2 dark:disabled:border-black-1 dark:disabled:bg-black-3 dark:disabled:text-grey-6';

export const DisabledTextStyle =
  'disabled:text-grey-2 dark:disabled:text-grey-6 disabled:bg-transparent dark:disabled:bg-transparent';

export enum ActionColors {
  BLUE,
  RED,
  NEUTRAL
}

export const Styles: Record<ActionColors, string> = {
  [ActionColors.BLUE]:
    'text-white font-medium border-blue-11 bg-blue-10 hover:border-blue-12 hover:bg-blue-11 active:border-blue-13 active:bg-blue-12',
  [ActionColors.RED]:
    'text-red-3 font-normal border-grey-1 dark:border-grey-7 bg-white dark:bg-black-2 hover:border-rainbow-red-2 dark:hover:border-rainbow-red-7 hover:bg-rainbow-red-9 dark:hover:bg-rainbow-red-10 active:border-rainbow-red-3 dark:active:border-rainbow-red-8 active:bg-rainbow-red-1 dark:active:bg-rainbow-red-11',
  [ActionColors.NEUTRAL]:
    'text-black-2 font-normal dark:text-white border-grey-1 dark:border-grey-7 bg-white dark:bg-black-2 active:border-grey-2 dark:active:border-grey-6 active:bg-light-grey-1 dark:active:bg-grey-7'
};

export const TextStyles: Record<ActionColors, string> = {
  [ActionColors.BLUE]: 'text-blue-9',
  [ActionColors.RED]: 'text-red-3',
  [ActionColors.NEUTRAL]: 'text-black-2 dark:text-white'
};

export const IconStyle: Record<ActionColors, AppTextColors> = {
  [ActionColors.BLUE]: 'text-white',
  [ActionColors.RED]: 'text-red-3',
  [ActionColors.NEUTRAL]: 'text-black-2'
};

export const TextIconStyle: Record<ActionColors, AppTextColors> = {
  [ActionColors.BLUE]: 'text-blue-9',
  [ActionColors.RED]: 'text-red-3',
  [ActionColors.NEUTRAL]: 'text-black-2'
};

export const IconDarkStyle: Record<ActionColors, AppTextDarkColors> = {
  [ActionColors.BLUE]: 'dark:text-white',
  [ActionColors.RED]: 'dark:text-red-3',
  [ActionColors.NEUTRAL]: 'dark:text-white'
};

export const TextIconDarkStyle: Record<ActionColors, AppTextDarkColors> = {
  [ActionColors.BLUE]: 'dark:text-blue-9',
  [ActionColors.RED]: 'dark:text-red-3',
  [ActionColors.NEUTRAL]: 'dark:text-white'
};
