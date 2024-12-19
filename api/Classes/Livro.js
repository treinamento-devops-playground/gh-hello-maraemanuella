class Livro {
    constructor(titulo, autor, genero, ano_de_publicacao, editora, linguagem, isbn_10, preco, loja) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano_de_publicacao = ano_de_publicacao;
        this.editora = editora;
        this.linguagem = linguagem;
        this.isbn_10 = isbn_10;
        this.preco = preco;
        this.loja = loja;
    }
}


const livro1 = new Livro(
    'Harry Potter e a Pedra Filosofal',
    'J. K. Rowling',
    ['Romance', 'Alta fantasia', 'Literatura infantil', 'Literatura fantástica'],
    1997,
    'Rocco',
    'Português Brasileiro',
    '8532511015',
    39.90,
    'Amazon'
);

console.log(livro1);
