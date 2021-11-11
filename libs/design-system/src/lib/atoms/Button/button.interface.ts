import { ButtonHTMLAttributes } from "react";
import { iIconTypes } from "../Icon/icon.interface";

import { iAny } from "@gohubly/shared"
import { iTypographyColors } from "../Typography/typography.interface";

export type iButtonSizes = 'small' | 'medium' | 'large'
export type iButtonVariants = 'primary' | 'secondary' | 'ghost' | 'danger'

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: iAny
  loading?: boolean
  size?: iButtonSizes
  variant?: iButtonVariants
  color?: iTypographyColors
  iconLeft?: iIconTypes | null
  iconRight?: iIconTypes | null
  disabled?: boolean
}