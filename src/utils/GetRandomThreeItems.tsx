// 배열에서 n개의 아이템 뽑아주는 함수

const GetRandomItems = (array: [], count: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default GetRandomItems;