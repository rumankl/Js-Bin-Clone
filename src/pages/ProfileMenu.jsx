import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { saveAs } from "file-saver";
// import ReactDOMServer from "react-dom/server";
// import HtmlInput from "../input/HtmlInput";

const userMenuItems = [
  { label: "New", value: "new" },
  { label: "Save html", value: "saveHtml" },
  { label: "save css", value: "saveCss" },
  { label: "save js", value: "saveJs" },
];

const ProfileMenu = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const menus = userMenuItems;

  const handleMenuItemClick = (value) => {
    switch (value) {
      case "new":
        nav("/"); // Navigate to new route
        break;
      case "saveHtml":
        const htmlContent = document.getElementById("htmlInput").value; const htmlBlob = new Blob([htmlContent], { type: "text/html;charset=utf-8" }); saveAs(htmlBlob, "index.txt");
        // const htmlContent = ReactDOMServer.renderToString(<HtmlInput />);
        // const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
        // saveAs(blob, "index.html");
        break;
      case "saveCss": const cssContent = document.getElementById("cssInput").value;
        const cssBlob = new Blob([cssContent], { type: "text/css;charset=utf-8" });
        saveAs(cssBlob, "style.css");
        break;
        ; case "saveJs": const jsContent = document.getElementById("jsInput").value;
        const jsBlob = new Blob([jsContent], { type: "application/javascript;charset=utf-8" });
        saveAs(jsBlob, "script.js"); break

      default:
        break;
    }
    closeMenu();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="red-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Typography variant="small" color="white">
            File
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`text-white h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menus.map(({ label, value }, key) => {
          const isLastItem = key === menus.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleMenuItemClick(value)}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
                }`}
            >
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
