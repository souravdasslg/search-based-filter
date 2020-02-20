import sentences from "../data/sentences";

export const search = keyword => {
  try {
    const regex = new RegExp(keyword, "i");
    return sentences
      .filter(sentence => {
        return regex.test(sentence.data);
      })
      .splice(0, 6);
  } catch (e) {
    return [];
  }
};
