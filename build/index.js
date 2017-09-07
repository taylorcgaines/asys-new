// index.tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = { name: 'Nader' }; // 4
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.text },
                "Welcome ",
                this.state.name,
                "! // 5")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
//# sourceMappingURL=index.js.map