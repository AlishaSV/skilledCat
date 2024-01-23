'use client';

import { DivisionForm } from '@/components/Division/DivisionForm/DivisionForm';
import { useAddDivisionMutation } from '@/components/Division/graphql/AddDivision.gql';
import { useRouter } from 'next/navigation';

export default function AddDivision() {
  const [addDivisionMutation] = useAddDivisionMutation();
  const router = useRouter();
  return (
    <div>
      <DivisionForm
        onSubmitCallback={({ title, urlKey, added }) => {
          addDivisionMutation({
            variables: {
              division: {
                title,
                urlKey,
                skills_uuids: added,
              },
            },
          }).then((result) => {
            if (result.data?.addDivision.urlKey) {
              router.push(`/division/${result.data?.addDivision.urlKey}`);
            }
          });
        }}
      />
    </div>
  );
}
