
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
    container :{
        flex: 1,
        justifyContent: "center"
    },
    inputBox: {
        borderBottomColor: "black",
        borderColor: 'black',
        borderBottomWidth: 1,
        padding : 5,
        marginLeft: 20,
        marginRight: 20,
    },
    heading:{
        fontSize: 30,
        textAlign: "center",
        color: "red"
    },
    btn:{
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40,
    },
})

export default styles;