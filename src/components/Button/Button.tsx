import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps {
  color?: 'black' | 'white'
  fontSize?: string
  padding?: string
  width?: string
  height?: string
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
  box-sizing: border-box;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  white-space: nowrap;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`

const Button: React.FC<ButtonProps> = ({
  color,
  fontSize,
  padding,
  children,
  width,
  height,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      fontSize={fontSize}
      padding={padding}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
