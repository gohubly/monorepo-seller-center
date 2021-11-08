import { iIconTypes } from "../Icon/icon.interface";

export type iInputSizes = 'medium' | 'large'

export interface iInput {
  prefix?: string
  suffix?: string | JSX.Element
  iconLeft?: iIconTypes
  iconRight?: iIconTypes
  size?: iInputSizes
  error?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type iInputComponent = iInput & React.InputHTMLAttributes<HTMLInputElement>