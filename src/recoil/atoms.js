import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isMentorAtom = atom({
  key: "isMentorAtom",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const continentAtom = atom({
  key: "continentAtom",
  default: "null",
  effects_UNSTABLE: [persistAtom],
});

export const mentorImgAtom = atom({
  key: "MentorImg",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
