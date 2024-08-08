const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_year: 1960,
    genre: ["Fiction", "Classic"],
    description:
      "A classic novel depicting racial injustice in the American South.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/To_Kill_a_Mockingbird_zj2zwq.jpg",
    price: 45.78,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publication_year: 1949,
    genre: ["Dystopian", "Science Fiction"],
    description: "A dystopian novel portraying a totalitarian society.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/1984_me5ixt.jpg",
    price: 30.56,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_year: 1813,
    genre: ["Classic", "Romance"],
    description:
      "A classic novel exploring themes of love, marriage, and social norms.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Pride_and_Prejudice_s5cyby.jpg",
    price: 31.67,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: 1925,
    genre: ["Fiction", "Classic"],
    description:
      "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Great_Gatsby_ib2l6o.jpg",
    price: 30.89,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    publication_year: 1851,
    genre: ["Fiction", "Adventure"],
    description:
      "The epic tale of Captain Ahab's obsession with the white whale.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Moby_Dick_zng4aq.jpg",
    price: 35.87,
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publication_year: 1954,
    genre: ["Fantasy", "Adventure"],
    description:
      "An epic fantasy saga about the quest to destroy the One Ring.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267337/The_Lord_ofthe_Rings_wzxbfw.jpg",
    price: 56.98,
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publication_year: 1951,
    genre: ["Fiction", "Coming-of-age"],
    description:
      "A classic coming-of-age novel following Holden Caulfield's journey.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Catcher_in_the_Rye_nc9rj7.jpg",
    price: 30.99,
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publication_year: 1937,
    genre: ["Fantasy", "Adventure"],
    description:
      "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267336/The_Hobbit_so3iu3.jpg",
    price: 35.34,
  },
  {
    id: 9,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    publication_year: 1967,
    genre: ["Magical Realism", "Literary Fiction"],
    description:
      "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/100_years_of_Solitude_rs2uur.jpg",
    price: 40.56,
  },
  {
    id: 10,
    title: "War and Peace",
    author: "Leo Tolstoy",
    publication_year: 1869,
    genre: ["Historical Fiction", "Epic"],
    description:
      "A monumental work depicting the events of Russian society during the Napoleonic era.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267340/War-and-Peace_wtcbuy.jpg",
    price: 45.87,
  },
  {
    id: 11,
    title: "The Odyssey",
    author: "Homer",
    publication_year: 1614,
    genre: ["Epic", "Mythology"],
    description:
      "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Odyssey_kdgdym.jpg",
    price: 25.98,
  },
  {
    id: 12,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    publication_year: 1320,
    genre: ["Epic", "Poetry"],
    description:
      "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267334/The_Divine_Comedy_abelq3.jpg",
    price: 40.87,
  },
  {
    id: 13,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publication_year: 1880,
    genre: ["Classic", "Philosophical Fiction"],
    description:
      "A complex novel exploring themes of spirituality, morality, and human nature.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Brothers_Karamazov_fepbjz.jpg",
    price: 42.87,
  },
  {
    id: 14,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publication_year: 1866,
    genre: ["Classic", "Psychological Fiction"],
    description:
      "A psychological thriller revolving around guilt, conscience, and redemption.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Crime_and_Punishment_vimtex.jpg",
    price: 34.67,
  },
  {
    id: 15,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publication_year: 1890,
    genre: ["Gothic", "Philosophical Fiction"],
    description:
      "A novel about a man whose portrait ages while he retains his youth and beauty.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Picture_of_Dorian_Gray_wfg7d4.jpg",
    price: 30.56,
  },
  {
    id: 16,
    title: "Brave New World",
    author: "Aldous Huxley",
    publication_year: 1932,
    genre: ["Dystopian", "Science Fiction"],
    description:
      "A dystopian vision of a future society obsessed with pleasure and conformity.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/Brave_New_World_uehzi7.jpg",
    price: 34.87,
  },
  {
    id: 17,
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    publication_year: 1844,
    genre: ["Adventure", "Historical Fiction"],
    description:
      "An adventure novel of revenge, love, and redemption set in the early 19th century.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267334/The_Count_of_Monte_Cristo_asqft0.jpg",
    price: 34.98,
  },
  {
    id: 18,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    publication_year: 1877,
    genre: ["Classic", "Romance"],
    description:
      "A tragic love story set against the backdrop of Russian high society.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/Anna_Karenina_y0fsch.jpg",
    price: 56.98,
  },
  {
    id: 19,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication_year: 1988,
    genre: ["Fiction", "Philosophical"],
    description:
      "A philosophical novel about a shepherd boy's journey to find his personal legend.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Alchemist_beuqfc.jpg",
    price: 34.87,
  },
  {
    id: 20,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    publication_year: 1884,
    genre: ["Adventure", "Satire"],
    description:
      "A satirical novel following Huck Finn's journey down the Mississippi River.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Adventure_of_Huckleberry_Finn_jbqlzy.jpg",
    price: 23.87,
  },
  {
    id: 21,
    title: "The Iliad",
    author: "Homer",
    publication_year: 1609,
    genre: ["Epic", "Mythology"],
    description:
      "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267336/The_Iliad_gzg90f.jpg",
    price: 40.56,
  },
  {
    id: 22,
    title: "The Queen's Gambit",
    author: "Walter Tevis",
    publication_year: 1983,
    genre: ["Fantasy", "Adventure"],
    description:
      "The thrilling novel of one young woman’s journey through the worlds of chess and drug addiction.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Queen_s_Gambit_r8zuaz.jpg",
    price: 37.87,
  },
  {
    id: 23,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publication_year: 1605,
    genre: ["Classic", "Satire"],
    description:
      "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Don_Quixote_droaa9.jpg",
    price: 34.87,
  },
  {
    id: 24,
    title: "Frankenstein",
    author: "Mary Shelley",
    publication_year: 1818,
    genre: ["Gothic", "Science Fiction"],
    description:
      "A novel about the creation of a monster and the consequences of playing god.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Frankenstein_hisxrz.jpg",
    price: 40.34,
  },
  {
    id: 25,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    publication_year: 1865,
    genre: ["Fantasy", "Children's Literature"],
    description:
      "A whimsical tale about a girl named Alice who falls into a magical world.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/Alice_Adventures_in_Wonderland_lo85qh.jpg",
    price: 30.89,
  },
  {
    id: 26,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    publication_year: 1943,
    genre: ["Fable", "Children's Literature"],
    description:
      "A philosophical novella about a young prince's journey through the universe.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267337/The_Little_Prince_bsuoj1.jpg",
    price: 40.56,
  },
  {
    id: 27,
    title: "The Book Thief",
    author: "Markus Zusak",
    publication_year: 2005,
    genre: ["Historical Fiction", "War"],
    description: "A story of a girl living in Nazi Germany, narrated by Death.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Book_Thief_wauxic.jpg",
    price: 30.65,
  },
  {
    id: 28,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    publication_year: 1969,
    genre: ["Satire", "Science Fiction"],
    description: "An anti-war novel that mixes science fiction and dark humor.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/Slaughterhouse_Five_l06slu.jpg",
    price: 34.76,
  },
  {
    id: 29,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publication_year: 1939,
    genre: ["Historical Fiction", "Social Commentary"],
    description:
      "A novel about the plight of migrant workers during the Great Depression.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267335/The_Grapes_of_Wrath_lfqviw.jpg",
    price: 23.76,
  },
  {
    id: 30,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publication_year: 1953,
    genre: ["Dystopian", "Science Fiction"],
    description:
      "A dystopian novel depicting a future society where books are banned.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267331/Fahrenheit_451_coojw0.jpg",
    price: 42.45,
  },
  {
    id: 31,
    title: "The Lord of the Flies",
    author: "William Golding",
    publication_year: 1954,
    genre: ["Dystopian", "Psychological Fiction"],
    description:
      "A novel about a group of British boys stranded on an uninhabited island.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267337/The_Lord_ofthe_Flies_fz8rlk.jpg",
    price: 37.45,
  },
  {
    id: 32,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publication_year: 1979,
    genre: ["Science Fiction", "Comedy"],
    description:
      "A comedic science fiction series about the misadventures of Arthur Dent.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267335/The_Hitchhiker_s_Guide_tothe_Galaxy_bbscsp.jpg",
    price: 43.78,
  },
  {
    id: 33,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    publication_year: 1859,
    genre: ["Historical Fiction", "Classic"],
    description:
      "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/The_Tale_of_Two_Cities_syjw4i.jpg",
    price: 40.34,
  },
  {
    id: 34,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    publication_year: 1950,
    genre: ["Fantasy", "Children's Literature"],
    description:
      "A series of fantasy novels set in the magical land of Narnia.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Chronicles_of_Narnia_iq1gaa.jpg",
    price: 39.56,
  },
  {
    id: 35,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publication_year: 1985,
    genre: ["Dystopian", "Feminist Fiction"],
    description:
      "A dystopian novel set in a totalitarian society where women are subjugated.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267335/The_Handmaid_s_Tale_kkumew.jpg",
    price: 34.87,
  },
  {
    id: 36,
    title: "The Name of the Rose",
    author: "Umberto Eco",
    publication_year: 1980,
    genre: ["Historical Fiction", "Mystery"],
    description: "A medieval mystery novel set in an Italian monastery.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Name_ofthe_Rose_ihondf.jpg",
    price: 34.54,
  },
  {
    id: 37,
    title: "The Trial",
    author: "Franz Kafka",
    publication_year: 1925,
    genre: ["Absurdist Fiction", "Existential"],
    description: "A surreal novel exploring themes of guilt, law, and justice.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/The_Trial_pmepum.jpg",
    price: 32.54,
  },
  {
    id: 38,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    publication_year: 2003,
    genre: ["Historical Fiction", "Drama"],
    description:
      "A novel about friendship, redemption, and the impact of war in Afghanistan.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267336/The_Kite_Runner_nowvyr.jpg",
    price: 36.98,
  },
  {
    id: 39,
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    publication_year: 1989,
    genre: ["Historical Fiction", "Adventure"],
    description:
      "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Pillars_ofthe_Earth_irbh2m.jpg",
    price: 32.67,
  },
  {
    id: 40,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    publication_year: 2001,
    genre: ["Mystery", "Gothic"],
    description:
      "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/The_Shadow_ofthe_Wind_wloz5g.jpg",
    price: 45.76,
  },
  {
    id: 41,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    publication_year: 1911,
    genre: ["Children's Literature", "Classic"],
    description:
      "A classic children's novel about a young girl who discovers a hidden garden.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Secret_Garden_fpws7d.jpg",
    price: 40.34,
  },
  {
    id: 42,
    title: "The Giver",
    author: "Lois Lowry",
    publication_year: 1993,
    genre: ["Dystopian", "Young Adult"],
    description:
      "A dystopian novel about a society with strict control over emotions and memories.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267334/The_Giver_kwufxg.jpg",
    price: 43.54,
  },
  {
    id: 43,
    title: "The Metamorphosis",
    author: "Franz Kafka",
    publication_year: 1915,
    genre: ["Absurdist Fiction", "Existential"],
    description:
      "A novella about a man who wakes up one morning transformed into a giant insect.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267338/The_Metamorphosis_xmvefi.jpg",
    price: 45.78,
  },
  {
    id: 44,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    publication_year: 1936,
    genre: ["Historical Fiction", "Romance"],
    description:
      "A historical novel set during the American Civil War, centered around Scarlett O'Hara.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Gone_withthe_Wind_omg1lv.jpg",
    price: 34.78,
  },
  {
    id: 45,
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    publication_year: 1908,
    genre: ["Children's Literature", "Fantasy"],
    description:
      "A children's novel about the adventures of anthropomorphic animals.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267341/The_wind_inthe_Willlows_jlsvne.jpg",
    price: 50.67,
  },
  {
    id: 46,
    title: "Dracula",
    author: "Bram Stoker",
    publication_year: 1897,
    genre: ["Gothic", "Horror"],
    description:
      "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267332/Dracula_jla1gq.jpg",
    price: 40.56,
  },
  {
    id: 47,
    title: "The Call of the Wild",
    author: "Jack London",
    publication_year: 1903,
    genre: ["Adventure", "Nature"],
    description:
      "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Call_ofthe_Wild_wqpekg.jpg",
    price: 42.56,
  },
  {
    id: 48,
    title: "The Stand",
    author: "Stephen King",
    publication_year: 1978,
    genre: ["Horror", "Post-Apocalyptic"],
    description:
      "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/The_Stand_dqeb7h.jpg",
    price: 37.87,
  },
  {
    id: 49,
    title: "The Color Purple",
    author: "Alice Walker",
    publication_year: 1982,
    genre: ["Fiction", "Historical"],
    description:
      "A novel about the life of African-American women in the Southern United States.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267333/The_Color_Purple_l3tkhz.jpg",
    price: 32.65,
  },
  {
    id: 50,
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    publication_year: 1977,
    genre: ["Fantasy", "Mythopoeia"],
    description:
      "A collection of mythopoeic stories about the history of Middle-earth.",
    cover_image:
      "https://res.cloudinary.com/dut5dtzca/image/upload/v1722267339/The_Silmarillion_pjarvh.jpg",
    price: 48.56,
  },
];

export default books;
