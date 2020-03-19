import React from 'react'
import { ViewContainer, ViewContainerRow } from './styles'

export function View(props) {
  return <ViewContainer>{props.children}</ViewContainer>
}

export function ViewRow(props) {
  return <ViewContainerRow>{props.children}</ViewContainerRow>
}
