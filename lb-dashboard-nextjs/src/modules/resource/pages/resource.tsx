import PageCard from "@/modules/common/components/backgrounds/page_card";
import { Stack, Typography } from "@mui/material";
import CreateResourceForm from "../forms/create_resource";
import UpdateResourceForm from "../forms/update_resource";

export default function ResourcePage() {
  console.log("ResourcePage() was rendered here");
  return (
    <>
      <PageCard>
        <Stack spacing={3}>
          <Typography variant="h6" component="h1">
            Create Resource
          </Typography>
          <CreateResourceForm />
        </Stack>
      </PageCard>

      <PageCard>
        <Stack spacing={3}>
          <Typography variant="h6" component="h1">
            Update Resource
          </Typography>
          <UpdateResourceForm />
        </Stack>
      </PageCard>
    </>
  );
}
