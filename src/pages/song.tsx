/* eslint-disable unused-imports/no-unused-vars */

import type { TSong } from '@/@types/song';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function SongPage({ song }: { song: TSong }) {
  // TODO
  console.log(song);

  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <></>
    </Main>
  );
}

export async function getServerSideProps() {
  try {
    return { props: {} };
  } catch (e) {
    return {
      // TODO: handle error
      props: {},
    };
  }
}
