import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

export default function WrapperContainer({
  style = {},
  children
}) {

  // its the most basic parent component we have
  return (
    <View style={{ ...styles.container, ...style }}>
      <SafeAreaView>
        {children}
      </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor
  }

})