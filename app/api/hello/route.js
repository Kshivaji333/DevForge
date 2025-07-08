
const GET = () =>{
  return new Response(JSON.stringify({message: "Hey! Welcome to the API!"}, {headers: {"Content-Type": "application/json"}}));
};

export { GET };
