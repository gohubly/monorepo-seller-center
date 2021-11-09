export interface iCheckbox {
  children?: string
  checked?: boolean
  error?: string
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}