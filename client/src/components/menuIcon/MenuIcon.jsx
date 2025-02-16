function MenuIcon({ expand }) {
  return (
    <div className="w-6 lg:w-4 aspect-square flex justify-center items-center ">
      <div className="w-full h-4 lg:h-[6px] relative rounded-full ">
        <div
          className={`w-full h-[1px] rounded-full ${
            expand ? "top-[50%] rotate-45" : "top-0 rotate-0"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-[350ms]`}
        ></div>
        <div
          className={`w-full h-[1px] lg:hidden rounded-full top-[50%] ${
            expand ? "opacity-0" : "opacity-100"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-[350ms]`}
        ></div>
        <div
          className={`w-full h-[1px] rounded-full ${
            expand ? "top-[50%] -rotate-45" : "top-[100%] rotate-0"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-[350ms]`}
        ></div>
      </div>
    </div>
  );
}

export default MenuIcon;
