function MenuIcon({ expand }) {
  return (
    <div className="w-5 lg:w-6 aspect-square flex justify-center items-center ">
      <div className="w-full h-3 lg:h-2 relative rounded-full ">
        <div
          className={`w-full h-[1px] lg:h-[2px] rounded-full ${
            expand ? "top-[50%] rotate-45" : "top-0 rotate-0"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-1000`}
        ></div>
        <div
          className={`w-full h-[1px] lg:hidden rounded-full top-[50%] ${
            expand ? "opacity-0" : "opacity-100"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-1000`}
        ></div>
        <div
          className={`w-full h-[1px] lg:h-[2px] rounded-full ${
            expand ? "top-[50%] -rotate-45" : "top-[100%] rotate-0"
          } bg-lightPrimary lg:bg-lightSecondary absolute transform transition-all duration-1000`}
        ></div>
      </div>
    </div>
  );
}

export default MenuIcon;
