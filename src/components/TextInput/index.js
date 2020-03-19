import React, { useState, useRef } from 'react'
import { TextInputContainer, ViewTextInput, ViewMargin } from './styles'
import { Text } from '../Text'
import { Animated, TouchableOpacity } from 'react-native'
import { IconFA5 } from '../../assets/icons'
import { ViewRow } from '../View'

export function TextInput(props) {
  const animated = new Animated.Value(0)
  const [show, setShow] = useState(true)
  const animatedValueRef = useRef(animated)

  function animate() {
    Animated.timing(animatedValueRef.current, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShow(false)
    })
  }

  function animateBlur() {
    Animated.timing(animatedValueRef.current, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShow(true)
    })
  }

  const opacity = animatedValueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  return (
    <ViewMargin>
      <ViewTextInput>
        <Animated.View style={{ opacity, position: 'absolute', top: '-50%' }}>
          <Text fontSize={14} color="#C7C7CD">
            {props.text}
          </Text>
        </Animated.View>
        <ViewRow>
          <TextInputContainer
            placeholder={show ? props.text : ''}
            onFocus={() => animate()}
            onBlur={() => animateBlur()}
            {...props}
          />
          {props.icon && (
            <TouchableOpacity onPress={props.pressedIcon}>
              <IconFA5 name={props.icon} />
            </TouchableOpacity>
          )}
        </ViewRow>
      </ViewTextInput>
      {props.error && <Text fontSize={12}>{props.error}</Text>}
    </ViewMargin>
  )
}
