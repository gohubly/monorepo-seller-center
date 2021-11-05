import { ButtonHTMLAttributes } from "react";
import { iIconTypes } from "../Icon/icon.interface";

import { iAny } from "@gohubly/shared"

export type iButtonSizes = 'small' | 'medium' | 'large'
export type iButtonVariants = 'primary' | 'secondary' | 'ghost' | 'danger'

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: iAny
  loading?: boolean
  size?: iButtonSizes
  variant?: iButtonVariants
  iconLeft?: iIconTypes | null
  iconRight?: iIconTypes | null
  disabled?: boolean
}