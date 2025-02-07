import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type NavigationListProps = {};

export default function NavigationList(_props: NavigationListProps) {
  console.log("NavigationList() was rendered here");
  return (
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, _index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
