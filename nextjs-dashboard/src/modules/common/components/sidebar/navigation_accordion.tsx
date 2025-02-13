"use client";
import React from "react";
import { NavMenuParent } from "./types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
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
import { navMenuContext } from "./store";
import { usePathname, useRouter } from "next/navigation";
import { Observer } from "mobx-react";

const BASE_PATH = "/dashboard";

type NavigationAccordionProps = {
  items: NavMenuParent[];
};

export default function NavigationAccordion(props: NavigationAccordionProps) {
  console.log("NavigationAccordion() was rendered here");

  const router = useRouter();
  const path = usePathname();

  const theme = useTheme();
  const context = React.useContext(navMenuContext);

  React.useEffect(() => {
    context.updateCurrentPath(path.slice(BASE_PATH.length));
    context.updateExpandedPath(path.slice(BASE_PATH.length));
  }, [path]);

  return (
    <List sx={{ paddingX: "0.5em" }}>
      <Observer>
        {() => (
          <>
            {props.items.map(
              (parent) =>
                parent.children.length !== 0 && (
                  <Accordion
                    key={parent.path}
                    expanded={context.expandedPath === parent.path}
                    onChange={(_, expanded) =>
                      context.updateExpandedPath(expanded ? parent.path : null)
                    }
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: context.currentPath.startsWith(parent.path)
                              ? "white"
                              : theme.vars.palette.primary.main,
                          }}
                        />
                      }
                      sx={{
                        ...(context.currentPath.startsWith(parent.path) && {
                          backgroundColor: theme.vars.palette.primary.main,
                        }),
                      }}
                    >
                      <Stack
                        direction="row"
                        gap="0.75em"
                        sx={{
                          color: context.currentPath.startsWith(parent.path)
                            ? "white"
                            : theme.vars.palette.primary.main,
                        }}
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
                          <ListItem
                            key={parent.path + child.path}
                            disablePadding
                            sx={{
                              ...(context.currentPath ===
                                parent.path + child.path && {
                                backgroundColor: "#BCD2E8",
                              }),
                            }}
                          >
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
          </>
        )}
      </Observer>

      <Accordion expanded={false}>
        <AccordionSummary onClick={() => router.push("/login")}>
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
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText primary={"Logout"} sx={{ fontSize: "1.25em" }} />
          </Stack>
        </AccordionSummary>
      </Accordion>
    </List>
  );
}
