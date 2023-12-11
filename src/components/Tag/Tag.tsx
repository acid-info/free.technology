import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const Tag = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 14px;
  line-height: 20px;
  height: 28px;
  border-radius: 14px;
  padding: 4px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid black;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;

  user-select: none;
  -webkit-user-select: none;

  @media (max-width: ${breakpoints.md}px) {
    padding: 4px 10px;
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }
`
