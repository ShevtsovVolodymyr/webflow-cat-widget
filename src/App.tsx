import { useEffect, useState } from "react";

// Define Cat type based on The Cat API response
interface Cat {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
  wikipedia_url?: string;
  reference_image_id?: string;
}

function App() {
  const [cat, setCat] = useState<Cat | null>(null);
  const [catImage, setCatImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "beng"; // default to Bengal

    async function fetchCat() {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        );
        const data: Cat[] = await res.json();

        if (data.length > 0) {
          const selected = data[0];
          setCat(selected);

          // If breed has reference_image_id, fetch image
          if (selected.reference_image_id) {
            const imgRes = await fetch(
              `https://api.thecatapi.com/v1/images/${selected.reference_image_id}`
            );
            const imgData = await imgRes.json();
            setCatImage(imgData.url);
          }
        } else {
          setError("Cat not found.");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error fetching cat info.");
      } finally {
        setLoading(false);
      }
    }

    fetchCat();
  }, []);

  if (loading) return <p style={{ fontFamily: "sans-serif" }}>Loading cat info...</p>;
  if (error) return <p style={{ fontFamily: "sans-serif", color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "system-ui, sans-serif",
        background: "#fff"
      }}
    >
      {catImage && (
        <img
          src={catImage}
          alt={cat?.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "1rem",
            objectFit: "cover"
          }}
        />
      )}
      <h2 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>{cat?.name}</h2>
      <p style={{ margin: "0.25rem 0" }}>
        <strong>Origin:</strong> {cat?.origin}
      </p>
      <p style={{ margin: "0.25rem 0" }}>
        <strong>Temperament:</strong> {cat?.temperament}
      </p>
      <p style={{ margin: "0.75rem 0", lineHeight: "1.5" }}>
        {cat?.description}
      </p>
      {cat?.wikipedia_url && (
        <p>
          <a
            href={cat.wikipedia_url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#ff6b6b",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.3s"
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#e25555")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#ff6b6b")
            }
          >
            Learn more →
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
