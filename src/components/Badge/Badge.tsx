import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 12px;
  line-height: 16px;
  height: 24px;
  padding: 4px 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`
