import { iIconTypes } from "../Icon/icon.interface";

export interface iStepper {
  currentStep: number | string
  steps: {
    icon?: iIconTypes
    label: string
  }[]
}