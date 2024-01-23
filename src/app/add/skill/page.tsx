'use client';

import { SkillsForm } from '@/components/skills/skillsForm';
import { useAddSkillMutation } from '@/components/skills/graphql/AddSkill.gql';
import { useRouter } from 'next/navigation';

export default function AddSkill() {
  const [addSkillMutation] = useAddSkillMutation();
  const router = useRouter();
  return (
    <div>
      <SkillsForm
        callback={({ urlKey, title }) => {
          addSkillMutation({
            variables: {
              skill: {
                title,
                urlKey,
              },
            },
          }).then((result) => {
            if (result.data?.addSkill.urlKey) {
              router.push(`/skill/${result.data?.addSkill.urlKey}`);
            }
          });
        }}
      />
    </div>
  );
}
