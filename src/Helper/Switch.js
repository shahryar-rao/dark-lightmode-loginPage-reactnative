import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Switch } from 'react-native';
import DarkLogin from '../components/darkLogin';
import WhiteLogin from '../components/whiteLogin';
const SwitchHelper = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>

            {isDarkMode ? <DarkLogin /> : <WhiteLogin />}

            <Switch
                style={styles.switch}
                onValueChange={toggleMode}
                value={isDarkMode}
            />
        </>

    )
}


export default SwitchHelper;

const styles = StyleSheet.create({
    switch: {
        position: "absolute",
        top: 50,
        right: 10
    }
})