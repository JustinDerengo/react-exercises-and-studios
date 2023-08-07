export default function BookList() {
   let pageTitle = "Books I Recommend";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905815i/228665.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The wheel of time" width="200px"/>
         <img src={book2} alt="Dune" width ="200px"/>
         <img src={book3} alt="Mistborn" width="200px"/>
      </div>      
   );
}