export const serializers = {
    types: {
        block: (props) => {
            const { style, markDefs } = props.node;
            console.log("markDefs", markDefs);

            if (style === "normal") {
                if (markDefs.length !== 0) {
                    return (
                        <>{props.children}</>
                    )
                }
                if (props.children.length === 1 && props.children[0] === "") {
                    return <br />;
                }
                return <p>{props.children}</p>;
            }

        },
        link: ({ mark, children }) => {
            const { href } = mark;
            console.log("mark", children);
            return (
                <a href={href} target="_blank" style={{ color: 'red !important' }}>
                    {children}
                </a>
            );
        }
    },
};