// src/services/api.js
const API_URL =
  process.env.HYGRAPH_API ||
  "https://ap-south-1.cdn.hygraph.com/content/cm8oydqiz00j907wcg34woql0/master";

export async function fetchGraphQL(query, variables = {}) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add authorization if needed
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Check for network errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.errors?.[0]?.message ||
          `Network request failed with status ${response.status}`
      );
    }

    const json = await response.json();

    // Check for GraphQL errors
    if (json.errors) {
      const errorMessages = json.errors.map((err) => err.message).join(", ");
      throw new Error(`GraphQL Error: ${errorMessages}`);
    }

    return json.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
