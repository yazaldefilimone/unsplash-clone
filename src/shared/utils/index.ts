import { env } from '@/shared/env';

const url = env.unsplash.api;

const userUrl = `${url}/user`;
const imageUrl = `${url}/image`;

export const endpoints = {
  user: {
    login: {
      method: 'post',
      url: `${userUrl}/login/`,
    },

    signup: {
      method: 'post',
      url: `${userUrl}/signup/`,
    },

    auth: {
      method: 'post',
      url: `${userUrl}/auth/`,
    },
  },
  image: {
    create: {
      method: 'post',
      url: `${imageUrl}/create/`,
    },
    all: {
      method: 'get',
      url: `${imageUrl}/all/`,
    },
    findImageForUser: {
      method: 'get',
      url: `${imageUrl}/findUser/`,
    },
    delete: {
      method: 'delete',
      url: `${imageUrl}/delete/`,
    },
  },
};
