// import { useEffect, useState } from "react";

// function App() {
//   const [titles, setTitles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTopStories = async () => {
//       try {
//         // 1. Get list of IDs
//         const idsRes = await fetch(
//           "https://hacker-news.firebaseio.com/v0/topstories.json"
//         );
//         const ids = await idsRes.json();

//         console.log(ids);

//         if (!Array.isArray(ids)) {
//           throw new Error("Expected array of IDs");
//         }

//         // 2. Take first 10
//         const topTen = ids.slice(0, 10);

//         console.log(topTen);

//         // 3. Fetch story details
//         const stories = await Promise.all(
//           topTen.map(id =>
//             fetch(
//               `https://hacker-news.firebaseio.com/v0/item/${id}.json`
//             ).then(res => res.json())
//           )
//         );

//         setTitles(stories.map(story => story.title));
//       } catch (err) {
//         setError("Failed to load stories" + (err.message ? `: ${err.message}` : ""));
//       }
//     };

//     fetchTopStories();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Top 10 Hacker News Stories</h1>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <ul>
//         {titles.map((title, i) => (
//           <li key={i}>{title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import {useState,useEffect} from 'react';

function App() {

  const [title, setTitle] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true)

      const res = await fetch('https://hacker-news.firebaseio.com/v0/item/8863.json')

      const data = await res.json()

      console.log(data)

      setTitle(data.title)
      setLoading(false)
    }

    fetchStory()
  }, [])
  
  return (
    <div>
      <h1>Hacker News Story</h1>
      {loading ? <h1>Loading...</h1> : <h1>{title}</h1>}
       </div>
  )
}

  export default App;


