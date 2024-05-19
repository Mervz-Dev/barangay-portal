import emailjs from "@emailjs/browser";

const sendEmailStatus = async ({ email, name, status, formName }) => {
  const templateId =
    status === "approved" ? "template_zth1pw5" : "template_u7lqjde";

  try {
    const templateParams = {
      to_email: email,
      user_name: name,
      type_form: formName,
    };
    const response = await emailjs.send(
      "service_ijhjmi8",
      templateId,
      templateParams,
      {
        publicKey: "x1jY58aKE7_ioMb9G",
      }
    );
    console.log("Email successfully sent!", response.status, response.text);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email:" + email);
  }
};

export { sendEmailStatus };
