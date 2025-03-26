// src/hooks/useCategories.js
import { useEffect, useState } from "react";
import { fetchGraphQL } from "../services/api";

const CATEGORIES_QUERY = `
  query {
    categories {
      id
      name
      slug
      subCategory {
        id
        name
        slug
        product {
          title
          image {
            url
          }
          shortDescription
          description
          price
          isBestSeller
        }
      }
    }
  }
`;

export function useCategories() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchGraphQL(CATEGORIES_QUERY);
        setData(result.categories);
        setError(null);
      } catch (err) {
        setError(err.message);

        // Auto-retry up to 3 times
        if (retryCount < 3) {
          setTimeout(() => setRetryCount((c) => c + 1), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [retryCount]);

  return { data, loading, error, retry: () => setRetryCount((c) => c + 1) };
}
