import { View, Text } from 'react-native'
import React from 'react'
import styles from "./style"

const Box = ({title,bgColor}) => {
  return (
    <View style={[
        styles.BoxStyle,
        {
            backgroundColor:bgColor,
        }
    ]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Box