import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: 300,
        alignItems: "center",
        backgroundColor: "#c8c8c8",
        marginBottom: 10,
        margin: "auto",
        padding: 15,
        borderRadius: 10,
        height: "95%",
        gap: 10,
    },
    img_block: {
        width: 200,
        height: 180,
        borderRadius: '50%',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1e522b',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    input: {
        width: 250,
        height: 40,
        borderBottomColor: "#222121",
        color: '#000',
        borderBottomWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
})