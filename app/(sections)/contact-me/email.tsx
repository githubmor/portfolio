import CopyClipboard from "./copy-clipboard";
import EmailIcon from "./email-icon";
import IconButton from "@/app/components/icon-button";

const emailAddress = "morteza2darzi@gmail.com";

function Email() {
  const mailtoLink = `mailto:${emailAddress}`;

  return (
    <div className="flex justify-center items-center gap-4 text-gray-600">
      <IconButton href={mailtoLink}>
        <EmailIcon />
      </IconButton>
      <span className="text-gray-900 font-semibold text-lg">
        {emailAddress}
      </span>
      <CopyClipboard text={emailAddress} />
    </div>
  );
}

export default Email;
