import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineInformationCircle, HiOutlineUsers, HiOutlineDocumentDuplicate } from "react-icons/hi"
import { FcManager } from "react-icons/fc"
import { PiCrossBold, PiHandsPraying } from "react-icons/pi"
import { MdOutlineChildCare } from "react-icons/md"
import { IoManOutline } from "react-icons/io5"
import { BsCalendarDay } from "react-icons/bs"
import { MdGroup, MdOutlineHomeRepairService } from "react-icons/md"
import { IoIosHelpBuoy } from "react-icons/io"
import { TbMoodKid } from "react-icons/tb"
import { BiBible, BiDetail, BiSolidContact } from "react-icons/bi"

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

            S.listItem()
                .title('Adult Retreat Page')
                .icon(IoManOutline)
                .child(
                    S.editor()
                        .schemaType('adultRetreat')
                        .documentId('adultRetreat')
                ),

            S.listItem()
                .title('Weekly Programmes Page')
                .icon(BsCalendarDay)
                .child(
                    S.editor()
                        .schemaType('weeklyProgrammes')
                        .documentId('weeklyProgrammes')
                ),

            S.listItem()
                .title('Groups Page')
                .icon(MdGroup)
                .child(
                    S.editor()
                        .schemaType('groupsPage')
                        .documentId('groupsPage')
                ),

            S.listItem()
                .title('Ministries Page')
                .icon(MdOutlineHomeRepairService)
                .child(
                    S.editor()
                        .schemaType('ministries')
                        .documentId('ministries')
                ),

            S.listItem()
                .title('Outreach Page')
                .icon(IoIosHelpBuoy)
                .child(
                    S.editor()
                        .schemaType('outreach')
                        .documentId('outreach')
                ),

            S.listItem()
                .title('Kids Ministry Page')
                .icon(TbMoodKid)
                .child(
                    S.editor()
                        .schemaType('kidsMinistry')
                        .documentId('kidsMinistry')
                ),

            S.listItem()
                .title('Prayer Page')
                .icon(PiHandsPraying)
                .child(
                    S.editor()
                        .schemaType('prayerPage')
                        .documentId('prayerPage')
                ),

            S.listItem()
                .title('Young Adults Page')
                .icon(() => '👩🏽‍🦱')
                .child(
                    S.editor()
                        .schemaType('youngAdults')
                        .documentId('youngAdults')
                ),

            S.listItem()
                .title('Messages Page')
                .icon(BiBible)
                .child(
                    S.editor()
                        .schemaType('messagePage')
                        .documentId('messagePage')
                ),

            S.listItem()
                .title('Outreach Detail Page')
                .icon(BiDetail)
                .child(
                    S.editor()
                        .schemaType('outreachDetail')
                        .documentId('outreachDetail')
                ),

            S.listItem()
                .title('Contact Page')
                .icon(BiSolidContact)
                .child(
                    S.editor()
                        .schemaType('contact')
                        .documentId('contact')
                ),

            // Add a visual divider (optional)
            S.divider(),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "home", "iamnew", "leadership", "about", "easterPage", "youthRetreat", "adultRetreat", "weeklyProgrammes", "groupsPage", "ministries", "outreach", "kidsMinistry", "prayerPage", "youngAdults", "messagePage", "outreachDetail", "contact"
                    ].includes(listItem.getId())
            ),
        ]);
