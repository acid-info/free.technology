import styled from '@emotion/styled'
import React from 'react'
import ArrowUpRight from '../Icons/ArrowUpRight'

interface ButtonProps {
  color?: 'black' | 'white' | 'grey'
  fontSize?: string
  padding?: string
  width?: string
  height?: string
  children?: React.ReactNode
  icon?: boolean
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
  box-sizing: border-box;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  white-space: nowrap;
  text-align: ${(props) => (props.icon ? 'left' : 'center')};
  border-radius: 2px;
  position: relative;

  user-select: none;
  -webkit-user-select: none;

  svg {
    path {
      stroke: ${(props) => (props.color === 'black' ? 'white' : 'black')};
    }
  }

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === 'black' ? 'rgba(0, 0, 0, 0.05)' : 'black'};
    color: ${(props) => (props.color === 'black' ? 'black' : 'white')};
    border: 1px solid transparent;

    svg path {
      stroke: ${(props) => (props.color === 'black' ? 'black' : 'white')};
    }
  }
`

const Button: React.FC<ButtonProps> = ({
  color,
  fontSize,
  padding,
  children,
  width,
  height,
  icon = false,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      fontSize={fontSize}
      padding={padding}
      width={width}
      height={height}
      icon={icon}
      {...props}
    >
      {children}
      {icon && (
        <IconContainer>
          <ArrowUpRight />
        </IconContainer>
      )}
    </StyledButton>
  )
}

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
`

export default Button
