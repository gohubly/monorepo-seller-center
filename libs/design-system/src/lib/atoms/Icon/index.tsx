import React from "react"

import { iIconTypes, iIcon } from './icon.interface'

import User from './icons/user.svg'
import Question from './icons/question.svg'
import Check from './icons/check.svg'
import Logo from './icons/logo.svg'

const ICONS_BY_ID: Record<iIconTypes, string> = {
  user: User,
  question: Question,
  check: Check,
  logo: Logo,
}

export const Icon: React.FC<iIcon> = (props) => {
  const icon = ICONS_BY_ID[props.id]
  return icon ? <img src={icon} /> : null
}