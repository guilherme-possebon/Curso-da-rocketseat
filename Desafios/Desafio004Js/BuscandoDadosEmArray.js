const bookByCategory = [
    {
        categoria: "Riqueza",
        books: [
            {
                title: "Os segregos da mente milhonária",
                author: 'T. Harv Eker',
            },
            {
                title: "O homem mais rico da Babilônia",
                author: 'Geoger S. Clason',
            },
            {
                title: "pai rico, pai probre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: 'Auguto Cury',
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: 'Auguto Cury',
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = bookByCategory.length;
    console.log('Total de categorias:', totalCategories);
for(let category of bookByCategory) {
    console.log('Total de livros da categoria', category.categoria + ":", category.books.length);
}



function countAuthors() {
    let authorstring = [];

    for(let categoriaFunction of bookByCategory) {
        for(let book of categoriaFunction.books) {
            if(authorstring.indexOf(book.author) == -1) {
                authorstring.push(book.author);
            }
        }
    }

    console.log('Total de autores:', authorstring.length);
}

countAuthors();

function booksOfAthor(author) {
    let bookstring = [];

    for(let categoriaFunction of bookByCategory) {
        for(let book of categoriaFunction.books) {
            if(book.author === author) {
                bookstring.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: ${bookstring.join(", ")} `)
}
booksOfAthor('Robert T. Kiyosaki e Sharon L. Lechter')