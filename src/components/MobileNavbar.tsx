import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";

export default function MobileNavbar() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Mentor</MenuItem>
        <MenuItem>Konsulent</MenuItem>
        <MenuItem>Udvikling</MenuItem>
      </Menu>
    </Dropdown>
  );
}
