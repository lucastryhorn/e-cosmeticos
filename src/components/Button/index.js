import React from 'react'
import { ContainerButton } from './styles'

export function Button(props) {
  return <ContainerButton {...props}>{props.children}</ContainerButton>
}
