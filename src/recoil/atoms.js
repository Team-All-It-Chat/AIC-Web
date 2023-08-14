import { atom } from "recoil";

export const isMentorAtom = atom({
  key: "isMentorAtom",
  default: false,
});

export const continentAtom = atom({
  key: "continentAtom",
  default: "null",
});

export const mentorImgAtom = atom({
  key: "MentorImg",
  default: "",
});
