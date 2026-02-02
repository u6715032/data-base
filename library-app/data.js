/* ---------- USERS ---------- */
let users = JSON.parse(localStorage.getItem("users")) || [
  {username:"member1", password:"123", role:"member", banned:false},
  {username:"member2", password:"123", role:"member", banned:false},
  {username:"member3", password:"123", role:"member", banned:false},
  {username:"member4", password:"123", role:"member", banned:false},
  {username:"member5", password:"123", role:"member", banned:false},

  {username:"staff1", password:"123", role:"staff", banned:false},
  {username:"staff2", password:"123", role:"staff", banned:false},

  {username:"admin", password:"123", role:"admin", banned:false}
];

/* ---------- BOOKS ---------- */
let books = JSON.parse(localStorage.getItem("books")) || [
  {id:1, title:"Database Systems", year:2020, isbn:"9780001", publisherId:1, categoryId:1, location:"Shelf A1", qty:8},
  {id:2, title:"Web Programming", year:2021, isbn:"9780002", publisherId:2, categoryId:1, location:"Shelf B2", qty:6},
  {id:3, title:"Operating Systems", year:2019, isbn:"9780003", publisherId:1, categoryId:2, location:"Shelf C1", qty:7},
  {id:4, title:"Computer Networks", year:2018, isbn:"9780004", publisherId:3, categoryId:2, location:"Shelf C2", qty:5},
  {id:5, title:"Software Engineering", year:2022, isbn:"9780005", publisherId:2, categoryId:3, location:"Shelf D1", qty:9},
  {id:6, title:"Artificial Intelligence", year:2021, isbn:"9780006", publisherId:3, categoryId:3, location:"Shelf D2", qty:4},
  {id:7, title:"Data Structures", year:2020, isbn:"9780007", publisherId:1, categoryId:1, location:"Shelf E1", qty:8},
  {id:8, title:"Algorithms", year:2019, isbn:"9780008", publisherId:2, categoryId:1, location:"Shelf E2", qty:6},
  {id:9, title:"Cyber Security", year:2022, isbn:"9780009", publisherId:3, categoryId:4, location:"Shelf F1", qty:5},
  {id:10, title:"Cloud Computing", year:2023, isbn:"9780010", publisherId:1, categoryId:4, location:"Shelf F2", qty:7},
  {id:11, title:"Machine Learning", year:2021, isbn:"9780011", publisherId:2, categoryId:3, location:"Shelf G1", qty:5},
  {id:12, title:"Discrete Mathematics", year:2019, isbn:"9780012", publisherId:1, categoryId:5, location:"Shelf G2", qty:6},
  {id:13, title:"HCI", year:2020, isbn:"9780013", publisherId:3, categoryId:3, location:"Shelf H1", qty:4},
  {id:14, title:"Computer Graphics", year:2018, isbn:"9780014", publisherId:2, categoryId:2, location:"Shelf H2", qty:3},
  {id:15, title:"Mobile App Development", year:2022, isbn:"9780015", publisherId:1, categoryId:1, location:"Shelf I1", qty:6}
];

/* ---------- RESERVATIONS ---------- */
let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

/* ---------- BORROWED BOOKS + FINES ---------- */
let borrows = JSON.parse(localStorage.getItem("borrows")) || [
  {user:"member1", bookId:1, title:"Database Systems", due:"2024-01-01", fine:100, paid:false},
  {user:"member2", bookId:3, title:"Operating Systems", due:"2024-02-01", fine:60, paid:false},
  {user:"member3", bookId:5, title:"Software Engineering", due:"2024-01-15", fine:80, paid:false},
  {user:"member3", bookId:7, title:"Data Structures", due:"2024-03-01", fine:0, paid:true},
  {user:"member4", bookId:9, title:"Cyber Security", due:"2024-01-10", fine:120, paid:false},
  {user:"member5", bookId:10, title:"Cloud Computing", due:"2024-03-20", fine:0, paid:true}
];

/* ---------- SAVE FUNCTION ---------- */
function saveData(){
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("books", JSON.stringify(books));
  localStorage.setItem("reservations", JSON.stringify(reservations));
  localStorage.setItem("borrows", JSON.stringify(borrows));
}
