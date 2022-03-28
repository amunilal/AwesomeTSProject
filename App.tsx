import React from 'react'
import {StyleSheet, Button, View, SafeAreaView} from 'react-native'
import {captureFace} from '@whoyou/react-native-whoyou'
import styled from "styled-components/native"

const App = () => {
    function onCaptureFace() {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY29tLm1ycG1vbmV5aW5zdG9yZSIsImV4cCI6MTk1MjY4MDAwNywiaXNzIjoid2hveW91LmNvLnphIiwiYXVkIjoid2hveW91LmNvLnphIn0.2iwzkSNJ_8uDj9tFtEH7r2FK6ViJMjijXuahO-VckPk'
        captureFace(token, '8405275204082').then((scanResult) => {
            console.log(scanResult)
        })
    }

    return (
        <SafeAreaView>
            <ContentWrap>
                <Button onPress={onCaptureFace} title="Capture Face" />
            </ContentWrap>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const ContentWrap = styled.View`
  width: 100%;
  height: 100%;
`

export default App
