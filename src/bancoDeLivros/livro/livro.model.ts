import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  numeroDeSerie: {
    type: Number,
    required: true,
  },
  precoSugerido: {
    type: Number,
    required: true,
  },
  dataDePublicacao: {
    type: String,
    required: true,
  },
  edicao: {
    type: Number,
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
