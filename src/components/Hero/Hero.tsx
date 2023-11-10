import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Hero: React.FC = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.div`
  h1,
  h2 {
    font-size: 36px;
    line-height: 122%;
    word-break: break-word;
  }

  h1 {
    display: inline-flex;

    sup {
      vertical-align: super;
      font-size: 22px;
      position: relative;
      top: -0.5em;
    }
  }

  h2 {
    opacity: 0.3;
    margin-bottom: 32px;
  }

  margin-bottom: 165px;

  @media (max-width: ${breakpoints.md}px) {
    h1,
    h2 {
      font-size: 22px;
      line-height: 122%;
    }

    h1 {
      sup {
        vertical-align: super;
        font-size: 12px;
      }
    }

    margin-bottom: 74px;
  }
`

export default Hero
