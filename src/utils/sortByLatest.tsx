// 게시글 최신순 정렬 로직

const sortByLatest = (array: Array<any>) => {
  const sortedPosts = array.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return sortedPosts;
};

export default sortByLatest;
