import BookItem from './BookData';

const BooksList = () => {
  const books = [
    {
      Id: 1,
      Title: 'The Innovator’s Dilemma',
      Author: 'Clayton Christens',
      Category: 'Technologies',
    },
    {
      Id: 2,
      Title: 'The Soul of a New Machine',
      Author: 'Tracy Kidder',
      Category: 'Technologies',
    },
  ];
  return (
    <>
      <div className="book-list">
        <ul>
          {books.map((book) => (
            <BookItem
              Title={book.Title}
              Author={book.Author}
              Category={book.Category}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BooksList;
