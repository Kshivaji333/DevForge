const makePostRequest = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/test`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Omkar" }),
  })
  const data = await res.json();
  console.log(data);
  return {data};
}

export default makePostRequest;