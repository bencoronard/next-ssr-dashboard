import { Permission } from "@/modules/permissions/models/types";
import {
  Assignment,
  Gavel,
  Notifications,
  VerifiedUser,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export type NavMenuParent = {
  path: string;
  label: string;
  children: NavMenuChild[];
  icon?: React.ElementType<SvgIconProps>;
};

export type NavMenuChild = {
  permissionId: Permission;
  path: string;
  label: string;
  icon?: React.ElementType<SvgIconProps>;
};

export const navMenuItems: NavMenuParent[] = [
  {
    path: "/consent",
    label: "Consent",
    icon: Assignment,
    children: [
      {
        permissionId: Permission.VIEW_CONSENT,
        path: "",
        label: "Consent overview",
      },
      {
        permissionId: Permission.VIEW_CONSENT_CREATE,
        path: "/create",
        label: "Create consent",
      },
    ],
  },
  {
    path: "/notification",
    label: "Notification",
    icon: Notifications,
    children: [
      {
        permissionId: Permission.VIEW_NOTIFICATION,
        path: "",
        label: "Notification dashboard",
      },
      {
        permissionId: Permission.VIEW_NOTIFICATION_CREATE,
        path: "/create",
        label: "Create notification",
      },
    ],
  },
  {
    path: "/insurance",
    label: "Insurance",
    icon: VerifiedUser,
    children: [
      {
        permissionId: Permission.VIEW_INSURANCE,
        path: "",
        label: "Insurance overview",
      },
      {
        permissionId: Permission.VIEW_INSURANCE_CREATE,
        path: "/issue",
        label: "Issue insurance",
      },
    ],
  },
  {
    path: "/auction",
    label: "Auction",
    icon: Gavel,
    children: [
      {
        permissionId: Permission.VIEW_AUCTION,
        path: "",
        label: "Auction listing",
      },
      {
        permissionId: Permission.VIEW_AUCTION_CREATE,
        path: "/create",
        label: "Create auction listing",
      },
    ],
  },
];
