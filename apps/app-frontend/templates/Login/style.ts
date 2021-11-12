import styled from 'styled-components'
import { Flex } from "@gohubly/design-system"

import media from "../../helpers/utils/media"

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const ContentWrapper = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  flex: 1;

  padding: 24px 32px;

  ${media.tablet`
    margin: auto;
    width: 100%;
    width: 432px;
  `}

  ${media.uhd`
    padding: auto;
    width: 550px;
  `}
`

export const LoginFormWrapper = styled.aside`
  margin-top: 24px;

  ${media.desktop`
    margin-top: 42px;
  `}
`

export const FooterWrapper = styled(Flex)`
  justify-content: center;
  padding: 50px;
`
