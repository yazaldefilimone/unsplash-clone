import { LocalStorageAdapter } from '@/infrastructure/cache';
import { env } from '@/shared/env';

const url = env.unsplash.api;
const cache = new LocalStorageAdapter().get(env.storage.token);
const auth = {
  Authorization: `Bearer ${cache?.token}`,
};
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
      headers: auth,
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
      headers: auth,
    },
  },
};
