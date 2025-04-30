const cds = require('@sap/cds');

(async () => {
  const db = await cds.connect.to('db'); // connect to database

  await db.run(DELETE.from('my.bookshop.Orders'));
  await db.run(DELETE.from('my.bookshop.Books'));
  await db.run(DELETE.from('my.bookshop.Authors'));

  console.log('✅ All data deleted.');
  process.exit(0);
})();
