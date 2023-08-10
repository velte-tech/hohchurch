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

        }
    },
    marks: {
        link: ({ mark, children }) => {

            if (window.location.href.includes("outreach_detail")) {
                return (
                    <a href={mark.href} target="_blank"
                        rel="noopener noreferrer" className="outreach_detail_social">
                        {children}
                    </a>
                )
            }
            return (
                <a href={mark.href} target="_blank" style={{ color: 'red', textDecoration: "underline" }} rel="noopener noreferrer">{children}</a>
            )
        }
    }
};