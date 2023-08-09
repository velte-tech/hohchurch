export const serializers = {
    types: {
        block: (props) => {
            const { style } = props.node;
            if (style === "normal") {
                if (props.children.length === 1 && props.children[0] === "") {
                    return <br />;
                }
                return <p>{props.children}</p>;
            }
        },
    },
};