module.exports = {
    main_screen: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
    main_screen__display: {
        elevation: 10,
        width: '95%',
        // height: '25%',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',

        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        marginBottom: 10,
        padding: 10,
    },
    main_screen__display_text: {
        fontSize: 50,
        textAlign: 'right',
    },

    main_screen__keypad: {
        width: '100%',
        height: '70%',
        // backgroundColor: '#FF5757',
        // justifyContent: 'center',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 6
    },

    bg_button: {
        backgroundColor: '#F1F2F3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        padding: 25,
        overflow: 'hidden'
    },
    text_button: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },

    bg1_button: {
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        padding: 25,
        overflow: 'hidden'
    },

    text1_button: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    bg2_button: {
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        padding: 25,
        overflow: 'hidden'
    },
    text2_button: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
}