import Livro from './livro.model';

export const livroTypeDefs = `
  
  type Livro { 
    id: ID!,
    idioma: String,
    tema: String,
    edicao: Int,
    numeroDeSerie: Int,
    precoSugerido: Float,
    dataDePublicacao: Date
  }


`;

export const livroResolvers = {
  Query: {
    async livros(_, { filter = {} }) {
      const livros: any[] = await Livro.find({}, null, filter);
      return livros.map(livro => livro.toObject());
    },
  },
};
