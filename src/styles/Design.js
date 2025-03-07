import { StyleSheet } from "react-native";

export const regdesignstyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    box: {
        width: "100%",
        maxWidth: 400,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 5,
        color: "black",
    },
    button: {
        backgroundColor: "#c66b3d",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    halfInput: {
        flex: 1,
    },
    firstInput: {
        marginRight: 10,
    },

    ToOtherLink:{
        color: 'blue', 
        textDecorationLine: 'underline',
    },

    rowContainer2:{
        flexDirection: "row",
        justifyContent: "center",  // This centers horizontally
        alignItems: "center",      // This centers vertically (optional, for extra alignment)
        marginTop: 15,
    },

    introContainer:{
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center",    
        marginBottom: 15,
    },

    logo:{
        width: 120,
        height: 120,
    },
});
