export async function suggestPriority(tasks) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/suggest-priority`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ tasks })
  });

  if (!res.ok) throw new Error("Gagal fetch AI priority");

  return await res.json();
}
