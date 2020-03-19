import React from 'react'
import { ContainerText } from './styles'

export function Text(props) {
  console.log(props)
  return (
    <ContainerText {...props}>{props.children}</ContainerText>
  )
}