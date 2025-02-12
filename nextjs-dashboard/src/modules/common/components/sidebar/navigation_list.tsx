import { Permission, View } from "@/modules/permissions/models/types";
import { extractPermissions } from "@/modules/permissions/utilities/permission";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";
import NextLink from "next/link";

const mockPermissionStrings = [
  "V-CONSENT",
  "V-NOTIFICATION",
  "V-INSURANCE",
  "V-AUCTION",
];

const navigationItems: View[] = [
  {
    permissionId: Permission.VIEW_CONSENT,
    path: "/consent",
    label: "Consent Management",
  },
  {
    permissionId: Permission.VIEW_NOTIFICATION,
    path: "/notification",
    label: "Notification Center",
  },
  {
    permissionId: Permission.VIEW_INSURANCE,
    path: "/insurance",
    label: "Insurance Management",
  },
  {
    permissionId: Permission.VIEW_AUCTION,
    path: "/auction",
    label: "Auction Center",
  },
];

type NavigationListProps = {};

export default function NavigationList(props: NavigationListProps) {
  console.log("NavigationList() was rendered here");

  const userPermissions: Set<Permission> = extractPermissions(
    mockPermissionStrings
  );
  const visibleNavItems: View[] = navigationItems.filter((item) =>
    userPermissions.has(item.permissionId)
  );

  return (
    <List>
      {visibleNavItems.map(
        (item) =>
          item && (
            <ListItem key={item.permissionId} disablePadding>
              <NextLink
                href={`/dashboard${item.path}`}
                passHref
                style={{ width: "100%", textDecoration: "none" }}
              >
                <Link
                  component={ListItemButton}
                  sx={{ textDecoration: "none" }}
                >
                  <ListItemText primary={item.label} />
                </Link>
              </NextLink>
            </ListItem>
          )
      )}
    </List>
  );
}
