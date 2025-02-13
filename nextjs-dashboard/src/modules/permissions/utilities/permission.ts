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
