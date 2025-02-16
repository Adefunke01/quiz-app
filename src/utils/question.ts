export const getPageNumber = (index: number) => {
    const obj: Record<number, string> = {
      0: "01",
      1: "02",
      2: "03",
      3: "04",
      4: "05",
      5: "06",
      6: "07",
      7: "08",
      8: "09",
      9: "10"
    };
    return obj[index];
  };

  export const shuffleOptions = <T>(array: T[])=>{
    return array.sort(() => Math.random() - 0.5);
  }