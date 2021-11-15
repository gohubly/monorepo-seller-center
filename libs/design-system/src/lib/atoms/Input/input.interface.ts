import { iIconTypes } from "../Icon/icon.interface";

export type iInputSizes = 'medium' | 'large'

export interface iInput {
  Size?: iInputSizes;
  label?: string;
  prefix?: string;
  suffix?: string | JSX.Element;
  iconLeft?: iIconTypes;
  iconLeftOnClick?: () => void
  iconRight?: iIconTypes;
  iconRightOnClick?: () => void
  error?: string
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type iInputComponent = iInput & React.InputHTMLAttributes<HTMLInputElement>