// api/booksApi.js
import { apiRequest } from "./apiClient.js";

function validateBookSchema(book) {
  return (
    typeof book.author === "string" &&
    typeof book.genre === "string" &&
    typeof book.yearPublished === "number"
  );
}

export async function createBook(payload) {
  let res =await apiRequest("/books", "POST", payload);
  if (res.ok) {
    console.log("✔ POST schema:", validateBookSchema(res.data));
  }
  return res;
}

export async function getBook(bookId) {
  return apiRequest(`/books/${bookId}`, "GET");
}

export async function updateBook(bookId, updatedFields) {
  return apiRequest(`/books/${bookId}`, "PATCH", updatedFields);
}

export async function deleteBook(bookId) {
  return apiRequest(`/books/${bookId}`, "DELETE");
}
