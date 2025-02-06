import PageCard from "@/modules/common/components/backgrounds/page_card";
import ResourceTable from "../components/table_resource";

type ResourcePageProps = {};

export default function ResourcePage(_props: ResourcePageProps) {
  // const headersList = headers();
  // const permCreate = headersList.get("X-PERM-CREATE");

  return (
    <>
      <PageCard>
        <ResourceTable allowCreate allowEdit allowDelete />
      </PageCard>
    </>
  );
}
