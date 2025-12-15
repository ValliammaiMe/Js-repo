// api/apiClient.js

const BASE_URL = "https://library-api.postmanlabs.com";
const API_KEY = "postmanrulz"; // ← your key

// Universal reusable request function
export async function apiRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      "api-key": API_KEY,
      "Content-Type": "application/json"
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    // Try parsing JSON safely
    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null; // DELETE or empty responses
    }

    return {
      ok: response.ok,
      status: response.status,
      data
    };

  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
