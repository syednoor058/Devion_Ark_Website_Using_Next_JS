import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Header() {
  return (
    <div className="px-1 lg:px-20 py-2 bg-bgColor1 text-white">
      <p className="text-center text-[12px] md:text-sm lg:text-base">
        <span className="pr-3">
          <AutoAwesomeIcon fontSize="small" />
        </span>
        From Strategy to Execution — We Build Digital Success.
      </p>
    </div>
  );
}

export default Header;
