import React, { FunctionComponent } from 'react';

import { BoardContainer } from './styles';
import { Image } from '@/presentation/components/Image';
import { Modal } from '@/presentation/components/Modal';
import { RemoveImage } from '@/presentation/components/RemoveImage';
export const Board: FunctionComponent = () => {
  const [modalDelete, SetModalDelete] = React.useState(false);

  const desc =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui molestias cum, nihil natus omnis sequi tenetur dolores doloribus quia quo delectus maxime soluta nobis sunt officia illum possimus numquam.';
  return (
    <div>
      <BoardContainer>
        <div>
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className=""
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
        </div>
        <div>
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className=""
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
        </div>
        <div>
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className=""
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
          <Image
            className="image-1"
            src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            description={desc}
            userName={'Yazalde Filimone'}
          />
        </div>
      </BoardContainer>

      <Modal active={modalDelete} SetActive={SetModalDelete}>
        <RemoveImage SetActive={SetModalDelete} />
      </Modal>
    </div>
  );
};
