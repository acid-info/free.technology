import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps {
  color?: 'black' | 'white' | 'grey'
  fontSize?: string
  padding?: string
  width?: string
  height?: string
  children?: React.ReactNode
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.color === 'black'
      ? 'black'
      : props.color === 'grey'
      ? 'rgba(0, 0, 0, 0.05)'
      : 'white'};
  color: ${(props) => (props.color === 'black' ? 'white' : 'black')};
  font-size: ${(props) => props.fontSize || '14px'};
  padding: ${(props) => props.padding || '6px 12px'};
  border: ${(props) => (props.color === 'grey' ? 'none' : '1px solid black')};
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  white-space: nowrap;
  text-align: center;
  border-radius: 2px;

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
