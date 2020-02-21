import sentences from "../data/sentences";
export const search = keyword => {
  const lowerCaseKeyword = keyword.toLowerCase();
  try {
    return sentences
      .filter(sentence => {
        const lowerCaseString = sentence.data.toLocaleLowerCase();
        return lowerCaseString.indexOf(lowerCaseKeyword) > -1;
      })
      .splice(0, 6);
  } catch (e) {
    return [];
  }
};
