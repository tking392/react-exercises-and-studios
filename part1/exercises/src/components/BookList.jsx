export default function BookList() {
   let pageTitle = "Great Books!";
   let book1 = "https://m.media-amazon.com/images/I/71f32nD8PCL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://cdn.kobo.com/book-images/20b5525d-668b-43c7-9049-40244fd6a8f9/1200/1200/False/the-count-of-monte-cristo-342.jpg";
   let book3 = "https://i0.wp.com/jonathanpongratz.com/wp-content/uploads/2020/04/animorphs29.jpg?fit=318%2C459&ssl=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="World War Z by Max Brooks" />
         <img src={book2} alt="The Count of Monte Cristo by Alexandre Dumas" />
         <img src={book3} alt="Animorphs #29 - The Sickness by K.A. Applegate" />
      </div>      
   );
}