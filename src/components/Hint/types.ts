export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main text content of the hint. */
  label: string;

  /** Optional title; if provided, shows a close button. */
  title?: string;

  /** Optional icon node displayed next to the title or label. @default <MdInfo /> */
  icon?: React.ReactNode;

  /** Callback fired when the close button is clicked. */
  onRequestClose?: () => void;

  /** Optional additional content rendered under the label. */
  children?: React.ReactNode;
}
