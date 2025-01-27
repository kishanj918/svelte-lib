export enum ModalStyles {
  STANDARD,
  TRANSPARENT
}

export const overlayStyles: Record<ModalStyles, string> = {
  [ModalStyles.STANDARD]: 'surface-container-overlay-background',
  [ModalStyles.TRANSPARENT]: ''
};
