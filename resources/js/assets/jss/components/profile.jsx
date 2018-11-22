const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "100%"
    },
    avatar: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        margin: "1em auto"
    },
    name: {
        fontWeight: "700",
        fontSize: "20pt",
        textAlign: "center"
    },
    data: {
        listStyleType: "none",
        margin: "1em 0",
        padding: "0"
    },
    'data > li':{
        backgroundColor: "#fff",
        padding: "1em",
        margin: "0",
        border: "1px solid #ddd",
        color: "#777"
    }
}

export default styles;