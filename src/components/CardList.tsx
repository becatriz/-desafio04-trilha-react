/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageUrl, setImageUrl] = useState('');

  // TODO MODAL USEDISCLOSURE
  function openImage(url: string) {
    setImageUrl(url);
    onOpen();
  }

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(card => (
          <Card
            key={card.ts}
            data={card}
            viewImage={() => openImage(card.url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage onClose={onClose} isOpen={isOpen} imgUrl={imageUrl} />
    </>
  );
}
