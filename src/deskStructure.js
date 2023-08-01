import { AiOutlineHome } from "react-icons/ai";
// import { HiOutlineInformationCircle, HiOutlineUsers, HiOutlineDocumentDuplicate } from "react-icons/hi"

export const deskStructure = (S) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Home Page")
                .icon(AiOutlineHome)
                .child(
                    S.editor()
                        .schemaType("home")
                    // .documentId("74e88acc-4693-4879-a3fc-a69f69823900")
                ),
            // Add a visual divider (optional)
            S.divider(),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "home",
                    ].includes(listItem.getId())
            ),
        ]);
