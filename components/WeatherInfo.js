import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const { 
        main : {temp},
        weather: [details]
     } = currentWeather
     const {icon} = details
     const iconUrl = `https://openweather.org/img/wn/`
    return (
        <View style={styles.weatherInfo}>
            <Text>{temp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    }
})
