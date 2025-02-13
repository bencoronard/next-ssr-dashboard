export type View = {
  permissionId: Permission;
  path: string;
  label: string;
};

export enum Permission {
  VIEW_CONSENT = "V-CONSENT",
  VIEW_NOTIFICATION = "V-NOTIFICATION",
  VIEW_INSURANCE = "V-INSURANCE",
  VIEW_AUCTION = "V-AUCTION",
  CREATE_RESOURCE = "C-RESOURCE",
  READ_RESOURCE = "R-RESOURCE",
  UPDATE_RESOURCE = "U-RESOURCE",
  DELETE_RESOURCE = "D-RESOURCE",
}
