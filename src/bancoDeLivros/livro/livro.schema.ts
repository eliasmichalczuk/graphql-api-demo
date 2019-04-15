import Livro from './livro.model';
import autorModel from '../autor/autor.model';

export const livroTypeDefs = `
  
  type Livro { 
    id: ID!,
    _autorId: ID,
    titulo: String!,
    numeroDeSerie: Int,
    precoSugerido: Float,
    dataDePublicacao: String,
    edicao: Int,
    idioma: String,
    tema: String
  }

  input livroInput {
    titulo: String,
    _autorId: ID,
    numeroDeSerie: Int,
    precoSugerido: Float,
    dataDePublicacao: String,
    edicao: Int,
    idioma: String,
    tema: String
  }

  input livroFilterInput {
    limit: Int
  }

  extend type Query {
    livros(filter: livroFilterInput): [Livro]
    livro(id: String!): Livro
  }

  extend type Mutation {
    addLivro(input: livroInput!): Livro
    addLivros(input: [livroInput!]!): [Livro]
    deleteLivro(id: String!): Livro
  }
`;

export const livroResolvers = {
  Query: {
    async livros(_, { filter = {} }) {
      const livros: any[] = await Livro.find({}, null, filter);
      return livros.map(livro => livro.toObject());
    },
    async livro(_, { id }) {
      const livro: any = await Livro.findById(id);
      return livro.toObject();
    },
  },
  Mutation: {
    async addLivro(_, { input }) {
      const livro: any = await Livro.create(input);
      return livro.toObject();
    },
    async deleteLivro(_, { id }) {
      await Livro.deleteOne(id);
      return id;
    },
    async addLivros(_, { input }) {
      const livros = await Livro.insertMany(input);
      return livros.toObject();
    },
  },
};
