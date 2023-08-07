import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineInformationCircle, HiOutlineUsers, HiOutlineDocumentDuplicate } from "react-icons/hi"
import { FcManager } from "react-icons/fc"
import { PiCrossBold } from "react-icons/pi"
import { MdOutlineChildCare } from "react-icons/md"

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

            S.listItem()
                .title('IAMNew Page')
                .icon(() => `🆕`)
                .child(
                    S.editor()
                        .schemaType('iamnew')
                        .documentId('iamnew')
                ),

            S.listItem()
                .title('About Page')
                .icon(HiOutlineInformationCircle)
                .child(
                    S.editor()
                        .schemaType('about')
                        .documentId('about')
                ),

            S.listItem()
                .title('Leadership Page')
                .icon(FcManager)
                .child(
                    S.editor()
                        .schemaType('leadership')
                        .documentId('leadership')
                ),

            S.listItem()
                .title('Easter Service Page')
                .icon(PiCrossBold)
                .child(
                    S.editor()
                        .schemaType('easterPage')
                        .documentId('easterPage')
                ),

            S.listItem()
                .title('Youth Retreat Page')
                .icon(MdOutlineChildCare)
                .child(
                    S.editor()
                        .schemaType('youthRetreat')
                        .documentId('youthRetreat')
                ),

            // Add a visual divider (optional)
            S.divider(),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "home", "iamnew", "leadership", "about", "easterPage", "youthRetreat"
                    ].includes(listItem.getId())
            ),
        ]);
