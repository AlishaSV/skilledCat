'use client';
import { SkillsForm } from '@/components/skills/skillsForm';
import { useGetSkillQuery } from '@/components/skills/graphql/GetSkill.gql';
import { useUpdateSkillMutation } from '@/components/skills/graphql/UpdateSkill.gql';

export default function Skill({ params }: { params: { url_key: string } }) {
  const { data } = useGetSkillQuery({ variables: { urlKey: params.url_key } });
  const [updateSkillMutation] = useUpdateSkillMutation();

  return data ? (
    <SkillsForm
      urlKey={data.getSkill.urlKey}
      title={data.getSkill.title}
      callback={({ urlKey, title }) => {
        updateSkillMutation({
          variables: {
            uuid: data?.getSkill?.uuid,
            skill: {
              urlKey,
              title,
            },
          },
        }).then((result) => {});
      }}
    />
  ) : (
    <div>loading</div>
  );
}
