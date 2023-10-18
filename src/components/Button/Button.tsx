import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps {
  color?: 'black' | 'white'
  fontSize?: string
  padding?: string
  children?: React.ReactNode
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.color === 'black' ? 'black' : 'white')};
  color: ${(props) => (props.color === 'black' ? 'white' : 'black')};
  font-size: ${(props) => props.fontSize || '14px'};
  padding: ${(props) => props.padding || '6px 12px'};
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

const Button: React.FC<ButtonProps> = ({
  color,
  fontSize,
  padding,
  children,
}) => {
  return (
    <StyledButton color={color} fontSize={fontSize} padding={padding}>
      {children}
    </StyledButton>
  )
}

export default Button
