import { ReactChild, ReactNode } from "react";
import React = require("react");

export type iSnackbarVariants = 'DEFAULT' | 'INFORMATION' | 'SUCCESS' | 'WARNING' | 'CRITICAL'

export interface iSnackBar {
  variant?: iSnackbarVariants
  label: string | ReactNode | JSX.Element | ReactChild
  close?: boolean
  button?: {
    label: string
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
  }
}