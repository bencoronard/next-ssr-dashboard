import PageCard from "@/modules/common/components/backgrounds/page_card";
import ResourceTable from "../components/table_resource";
import { Typography } from "@mui/material";

type ResourcePageProps = {
  topic?: string;
};

export default function ResourcePage(props: ResourcePageProps) {
  console.log(`${props.topic}ResourcePage() was rendered here`);

  // const headersList = headers();
  // const permCreate = headersList.get("X-PERM-CREATE");

  return (
    <>
      {props.topic && (
        <PageCard>
          <Typography component="span" variant="h6">
            {props.topic}
          </Typography>
        </PageCard>
      )}
      <PageCard>
        <ResourceTable allowCreate allowEdit allowDelete />
      </PageCard>
    </>
  );
}
