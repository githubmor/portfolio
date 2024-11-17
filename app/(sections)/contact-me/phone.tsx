import IconButton from "@/app/components/icon-button";
import CopyClipboard from "./copy-clipboard";
import PhoneIcon from "./phone-icon";

const phoneNumber = "+98 9119010041";

function Phone() {
  return (
    <div className="flex justify-center items-center gap-4 text-gray-600">
      <IconButton href={`tel:${phoneNumber}`}>
        <PhoneIcon />
      </IconButton>
      <span className="text-gray-900 font-semibold text-lg">{phoneNumber}</span>
      <CopyClipboard text={phoneNumber} />
    </div>
  );
}

export default Phone;
