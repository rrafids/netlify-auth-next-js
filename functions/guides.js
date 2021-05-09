exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Like a Boss 1", author: "mario" },
    { title: "Beat all Zelda Bosses Like a Boss 2", author: "mario" },
    { title: "Beat all Zelda Bosses Like a Boss 3", author: "mario" },
  ];

  // console.log(guides);

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ message: "User unauthenticated" }),
  };
};
