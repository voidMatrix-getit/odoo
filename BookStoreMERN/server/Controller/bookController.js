const Book = require("../model/bookModel");
const googleBooksAPI = require("../utils/googleBooksAPI");
const addBook = async (req, res) => {
  try {
    const { isbn } = req.body;
    const bookData = await googleBooksAPI.fetchBookData(isbn);
    const book = new Book(bookData);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Error adding book", error });
  }
};

module.exports = addBook;
