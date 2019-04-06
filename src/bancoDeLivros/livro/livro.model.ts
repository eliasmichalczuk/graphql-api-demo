import { mongoose } from 'mongoose';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

const livroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  numeroDeSerie: {
    type: Int32Array,
    required: true,
  },
  precoSugerido: {
    type: Float32Array,
    required: true,
  },
  dataDePublicacao: {
    type: GraphQLDate,
    required: true,
  },
  edicao: {
    type: Int32Array,
  },
  idioma: {
    type: String,
  },
  tema: {
    type: String,
  },
});

livroSchema.set('toObject', { getters: true, virtuals: true });

export default mongoose.model('Livro', livroSchema);
