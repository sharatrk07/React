export const GitInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}