import { NavMenuParent } from "@/modules/common/components/sidebar/types";
import { Permission } from "../models/types";

export function extractPermissions(
  permissionStrings: string[]
): Set<Permission> {
  return new Set(
    permissionStrings
      .map((permissionString) => permissionString as Permission)
      .filter((permission) => Object.values(Permission).includes(permission))
  );
}

export function filterNavMenuByPermissions(navMenuItems: NavMenuParent[], allowedPermissions: Set<Permission>
): NavMenuParent[] {
  return navMenuItems
    .map((parent) => {
      const filteredChildren = parent.children.filter((child) =>
        allowedPermissions.has(child.permissionId)
      );

      return filteredChildren.length > 0
        ? { ...parent, children: filteredChildren }
        : null;
    })
    .filter((item): item is NavMenuParent => item !== null);
}