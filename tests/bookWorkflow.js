// tests/bookWorkflow.js
import { createBook, getBook, updateBook, deleteBook } from "../api/booksAPI.js";

async function runBookWorkflow() {
  console.log("📌 Starting Book Workflow...\n");

  // 1. CREATE
  const created = await createBook({
    title: "Secret33",
    author: "Mars",
    genre: "fiction",
    yearPublished: 2000
  });

  if (!created.ok) {
    console.log("❌ Create Failed:", created.status);
    return;
  }

  const bookId = created.data.id;
  console.log("✅ Created Book ID:", bookId);
  console.log("✅ Created Book:", created.data);

  // 2. GET
  const fetched = await getBook(bookId);
  if (fetched.ok) {
    console.log("✅ Fetched Book:", fetched.data);
  } else {
    console.log("❌ Failed to fetch book:", fetched.status);
  }

  // 3. UPDATE
  const updated = await updateBook(bookId, {
    checkedOut: true,
    yearPublished: 1944,
    title: "Secret44"
  });

  if (updated.ok) {
    console.log("✅ Updated Book:", updated.data);
  } else {
    console.log("❌ Update Failed:", updated.status);
  }

  // 4. DELETE
  const deleted = await deleteBook(bookId);
  if (deleted.status === 200 || deleted.status === 204) {
    console.log(`🗑️ Book with ID ${bookId} deleted successfully.`);
  } else {
    console.log("❌ Delete failed:", deleted.status);
  }
}

await runBookWorkflow();

console.log("🎉 Book Workflow Completed!");