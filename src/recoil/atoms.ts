import { atom } from 'recoil';

interface User {
  categories: string[]; // 카테고리 타입에 맞게 수정 -> 사용 안 되는 것 확인한 다음 삭제
  categoryId: Category[]; // 새로 사용되는 카테고리
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

export interface Category {
  _id: string;
};

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
