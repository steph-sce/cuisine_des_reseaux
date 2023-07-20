export const handleRequest = async (request) => {
  try {
    const { data } = await request;
    // TODO: see confirmation message
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
