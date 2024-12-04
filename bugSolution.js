// pages/index.js

export default async function Home() {
  const { data, error } = await fetchData();
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>{data}</div>
  );
}

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return { data: await response.json(), error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: 'Error fetching data', error };
  }
}

// api/data.js

export default async function handler(req, res) {
  // Simulate an error
  // Uncomment below line to simulate an error. 
  //throw new Error('Simulated API error');
  res.status(200).json({ text: 'Data from API' });
} 