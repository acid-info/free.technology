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
    margin-top: 8px;

    sup {
      vertical-align: super;
      font-size: 22px;
      position: relative;
      top: -0.5em;
      transform: rotate(180deg);
    }
  }

  h2 {
    opacity: 0.3;
    margin-bottom: 32px;
  }

  margin-bottom: 200px;

  @media (max-width: ${breakpoints.xl}px) {
    h1,
    h2 {
      font-size: 27px;
      line-height: 32px;
    }

    h2 {
      margin-bottom: 24px;
    }

    button {
      width: 110px;
      height: 32px;
      font-size: 11px;
      line-height: 15px;
      padding: 8px 26px;
    }

    margin-bottom: 150px;
  }

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
      margin-top: 0;
    }

    h2 {
      margin-bottom: 16px;
    }

    margin-bottom: 74px;
  }
`

export default Hero
