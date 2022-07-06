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
    src: 'https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  };

  const list = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2],
  ];
  return (
    <div>
      <BoardContainer>
        {list.map((l) => (
          <div>
            {l.map((obj) => (
              <Image
                SetActive={SetModalDelete}
                src={projects.src}
                description={projects.desc}
                userName={projects.username}
              />
            ))}
          </div>
        ))}
      </BoardContainer>

      <Modal active={modalDelete} SetActive={SetModalDelete}>
        <RemoveImage SetActive={SetModalDelete} />
      </Modal>
    </div>
  );
};
