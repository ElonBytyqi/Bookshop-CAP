const cds = require('@sap/cds');
const { Books, Authors } = cds.entities('my.bookshop');

module.exports = cds.service.impl(async function () {

  // Create a new book
  this.on('CreateBook', async (req) => {
    const { title, price, authorId } = req.data;

    // Step 1: Check if the author exists in the Authors table
    const author = await SELECT.from(Authors).where({ ID: authorId });

    if (!author || author.length === 0) {
      req.error(404, 'Author not found');
      return;
    }

    // Step 2: Insert the new book into the Books table
    const newBook = {
      title: title,
      price: price,
      author: { ID: authorId },  // Assuming this is an association
    };

    const result = await INSERT.into(Books).entries(newBook);

    // Step 3: Return the newly created book details
    return result[0];
  });

});
