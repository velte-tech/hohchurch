import { payMethodIcon1, payMethodIcon2, payMethodIcon3, payMethodIcon4 } from "../assets/images";

export const donateContent = {
  supportText:
    "HOH Church is committed to providing a seamless and secure payment process to donors. The following payment processes and procedures have been developed to ensure that all payments are processed accurately and efficiently.",
  paymentMethodList: [
    "Bank Account Transfer",
    "Cheque",
    "Paypal",
    "Other payment methods, as agreed upon between HOH and the client.",
  ],
  methods: [
    {
      title: "Bank Account Transfer",
      description:
        "Members who wish to make payment via bank account transfer should follow these steps:",
      icon: payMethodIcon1,
      steps: [
        "Contact HOH via email or phone to request the necessary bank account details.",
        "Once the client receives the bank account details, they should initiate the transfer through their bank or online banking system.",
        "The client should email a copy of the transfer confirmation to HOH at info@hohcentre.co.uk",
        "Upon receipt of the transfer confirmation, HOH will confirm the receipt of payment and issue an invoice to the client.",
      ],
    },
    {
      title: "Cheque",
      description:
        "Members who wish to make payment via cheque should follow these steps:",
      icon: payMethodIcon2,
      steps: [
        'Make the cheque payable to "Highway Of Holiness".',
        "Upon receipt of the cheque, HOH will confirm the receipt of payment and issue an invoice to the client.",
      ],
    },
    {
      title: `Donate via PayPal`,
      description:
        "Donors who wish to make any donation through PayPal should click on the button below:",
      icon: payMethodIcon3,
      steps: [
        "In the message section, include your name, and any additional details.",
        "Upon receipt of the transfer, HOH will confirm the receipt of payment and issue an invoice to the donor.",
      ],
    },
    {
      title: "Donate with Credit/Debit Card",
      description:
        "Donors who wish to make donation with their credit or debit card should click on the button below.",
      icon: payMethodIcon4,
      steps: [
        "A receipt will be issued to the donor once payment has been received.",
      ],
    },
  ],
};