'use client';
import { useGetDivisionQuery } from '@/components/Division/graphql/GetDivision.gql';
import { useUpdateDivisionMutation } from '@/components/Division/graphql/UpdateDivision.gql';
import { DivisionForm } from '@/components/Division/DivisionForm/DivisionForm';

export default function Division({ params }: { params: { url_key: string } }) {
  const { data } = useGetDivisionQuery({ variables: { urlKey: params.url_key } });

  const [updateDivisionMutation] = useUpdateDivisionMutation();

  return data ? (
    <DivisionForm
      urlKey={data.getDivision.urlKey}
      title={data.getDivision.title}
      initAdded={data.getDivision.skills?.items.map((item) => item.uuid)}
      onSubmitCallback={({ urlKey, title, added, removed }) => {
        updateDivisionMutation({
          variables: {
            uuid: data?.getDivision?.uuid,
            division: {
              urlKey,
              title,
              add_skills_uuids: added,
              removed_skills_uuids: removed,
            },
          },
        }).then((result) => {});
      }}
    />
  ) : (
    <div>loading</div>
  );
}
