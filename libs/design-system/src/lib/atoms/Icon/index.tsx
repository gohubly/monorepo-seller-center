import React from "react"

import { iIconTypes, iIcon } from './icon.interface'

import User from './icons/user.svg'
import Question from './icons/question.svg'
import Check from './icons/check.svg'
import Logo from './icons/logo.svg'
import Alert from './icons/alert.svg'
import Bell from './icons/bell.svg'
import Close from './icons/close.svg'
import Denied from './icons/denied.svg'
import Info from './icons/info.svg'

const ICONS_BY_ID: Record<iIconTypes, string> = {
  user: User,
  question: Question,
  check: Check,
  logo: Logo,
  alert: Alert,
  bell: Bell,
  close: Close,
  denied: Denied,
  info: Info,
}

export const Icon: React.FC<iIcon> = (props) => {
  const icon = ICONS_BY_ID[props.id]
  return icon ? <img src={icon} /> : null
}