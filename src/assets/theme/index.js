const theme = {
    color: {
        primaryColor: "#b71c2b",
        secondaryColor: "#5CA499"
    },

    text: {
        primaryColor: "#565656",
        secondaryColor: "#222222"
    },

    mixin: {
        boxShadow: `
            transition: box-shadow 0.2s ease;
            &:hover{
            box-shadow: 0 2px 4px rgba(0,0,0,.18);
            }
            `
    },

}

export default theme;
