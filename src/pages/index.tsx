/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  async function getImages(pageParam: number) {
    const response = await api.get(`/api/images`);

    return response;
  }

  const { data, isLoading, isError } = useInfiniteQuery(
    'images',
    async ({ pageParam = 0 }) => getImages(pageParam),
    {
      getNextPageParam: page => !!page.data.after || null,
    }
  );

  const formattedData = useMemo(() => {
    return data?.pages.map(page => page?.data?.data).flat();
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
