"use client";
import { NavMenuParent } from "./types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemIcon,
  Stack,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";

const BASE_PATH = "/dashboard";

type NavigationAccordionProps = {
  items: NavMenuParent[];
};

export default function NavigationAccordion(props: NavigationAccordionProps) {
  console.log("NavigationAccordion() was rendered here");

  const theme = useTheme();

  return (
    <List sx={{ paddingX: "0.5em" }}>
      {props.items.map(
        (parent) =>
          parent.children.length !== 0 && (
            <Accordion key={parent.path}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack
                  direction="row"
                  gap="0.75em"
                  sx={{ color: theme.vars.palette.primary.main }}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                      minWidth: "auto",
                    }}
                  >
                    {parent.icon && <parent.icon />}
                  </ListItemIcon>

                  <ListItemText
                    primary={parent.label}
                    sx={{ fontSize: "1.25em" }}
                  />
                </Stack>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: 0 }}>
                <List disablePadding>
                  {parent.children.map((child) => (
                    <ListItem key={parent.path + child.path} disablePadding>
                      <NextLink
                        href={BASE_PATH + parent.path + child.path}
                        passHref
                        style={{
                          width: "100%",
                          textDecoration: "none",
                        }}
                      >
                        <Link
                          component={ListItemButton}
                          sx={{ textDecoration: "none" }}
                        >
                          <ListItemText primary={child.label} />
                        </Link>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          )
      )}
    </List>
  );
}
