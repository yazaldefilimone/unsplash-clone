import React, { FunctionComponent } from 'react';

import { BoardContainer } from './styles';
import { Image } from '@/presentation/components/Image';
import { Modal } from '@/presentation/components/Modal';
import { RemoveImage } from '@/presentation/components/RemoveImage';
export const Board: FunctionComponent = () => {
  const [modalDelete, SetModalDelete] = React.useState(true);
  const desc =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui molestias cum, nihil natus omnis sequi tenetur dolores doloribus quia quo delectus maxime soluta nobis sunt officia illum possimus numquam.';

  const projects = {
    username: 'Yazalde Filimone',
    desc,
    src: 'https://source.unsplash.com/random/',
  };

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  return (
    <div>
      <BoardContainer>
        <div>
          {list.map((obj) => (
            <Image
              SetActive={SetModalDelete}
              src={`https://source.unsplash.com/random/${obj * 2}`}
              description={projects.desc}
              userName={projects.username}
            />
          ))}
        </div>
        <div>
          {list.map((obj) => (
            <Image
              SetActive={SetModalDelete}
              src={`https://source.unsplash.com/random/${obj * 5}`}
              description={projects.desc}
              userName={projects.username}
            />
          ))}
        </div>
        <div>
          {list.map((obj) => (
            <Image
              SetActive={SetModalDelete}
              src={`https://source.unsplash.com/random/${obj * 11}`}
              description={projects.desc}
              userName={projects.username}
            />
          ))}
        </div>
      </BoardContainer>

      <Modal active={modalDelete} SetActive={SetModalDelete}>
        <RemoveImage SetActive={SetModalDelete} />
      </Modal>
    </div>
  );
};
