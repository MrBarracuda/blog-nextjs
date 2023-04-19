export async function getData(id = '') {
  const res = await fetch(`${process.env.API_URL}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}