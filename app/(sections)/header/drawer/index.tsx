import IconButton from "../../../components/icon-button";
import { Brand } from "../components";
import Actions from "../components/actions";
import Menus from "../menus";
import CloseIcon from "./close-icon";

type Props = {
  show: boolean;
  onHide: () => void;
};

function Drawer({ show, onHide }: Props) {
  return (
    <div
      className={`w-screen h-full fixed md:hidden bg-gray-900/10 backdrop-blur-sm duration-300 z-30 -right-0 top-0  ${
        !show && "translate-x-full"
      }`}
    >
      <div className={`fixed right-0 w-10/12 h-full bg-gray drop-shadow-2xl `}>
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100">
          <Brand />
          <IconButton onClick={onHide}>
            <CloseIcon />
          </IconButton>
        </div>
        <Menus />
        <Actions />
      </div>
    </div>
  );
}

export default Drawer;
