import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {

  ChevronDownIcon,

} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router";


const userMenuItems = [
  {
    label: "New",
    value: "new",
  },
  {
    label: "Save html",
    value: "save",
  },
  {
    label: "save css",
    value: "save",
  },
  {
    label: "save js",
    value: "save",
  },
];



const ProfileMenu = () => {

  const nav = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const menus = userMenuItems;


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="red-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Typography
            variant="small"
            color="white"

          >
            File
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={` text-white h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
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
              onClick={() => {
                switch (value) {
                  case "save":
                    nav('/'); ///////change it 
                    break;
                  case "new":
                    nav('/'); ///////change it 
                    break;

                  default:
                    break;
                }
                closeMenu();
              }}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
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
    </Menu >
  );
};

export default ProfileMenu;
