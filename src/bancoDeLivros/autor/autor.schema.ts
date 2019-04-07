import Autor from './autor.model';

export const autorTypeDefs = `
  
  type Autor { 
    id: ID!,
    nome: String!,
    sobrenome: String!,
    dataNascimento: String!,
    obras: [Livro]
  }

  input autorInput {
    nome: String!,
    sobrenome: String!,
    dataNascimento: String!,
  }

  input autorFilterInput {
    limit: Int
  }

  extend type Query {
    autores(filter: autorFilterInput): [Autor]
    autor(id: String!): Autor
  }

  extend type Mutation {
    addAutor(input: autorInput!): Autor
    deleteAutor(id: String!): Autor
  }
`;

export const autorResolvers = {
  Query: {
    async autores(_, { filter = {} }) {
      const autores: any[] = await Autor.find({}, null, filter);
      return autores.map(autor => autor.toObject());
    },
    async autor(_, { id }) {
      const autor: any = await Autor.findById(id);
      return autor.toObject();
    },
  },
  Mutation: {
    async addAutor(_, { input }) {
      const autor: any = await Autor.create(input);
      return autor.toObject();
    },
    async deleteAutor(_, { id }) {
      await Autor.deleteOne(id);
      return id;
    },
  },
};
