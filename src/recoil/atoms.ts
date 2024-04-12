import { atom } from 'recoil';

interface User {
  categories: string[]; // 카테고리 타입에 맞게 수정
  _id: string;
  postId: string[];
  buddyId: string[];
  nickName: string;
  email: string;
  adminNumber: number;
  profileImage: string[];
  introduce: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
