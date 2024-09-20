type Props = {
  show: boolean;
  onHide: () => void;
};

function Drawer({ show, onHide }: Props) {

  return (
    <div
      className={`w-screen h-screen absolute md:hidden bg-gray-900/10 backdrop-blur-sm duration-300 z-30 -right-0 top-0  ${
        !show && "translate-x-full"
      }`}
    >
      <div className={`absolute right-0 w-10/12 h-full bg-gray drop-shadow-2xl `}>
        <span onClick={onHide}>close</span>
      </div>
    </div>
  );
}

export default Drawer;
