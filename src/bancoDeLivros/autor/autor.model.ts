import mongoose, { Schema } from 'mongoose';
import livroModel from '../livro/livro.model';

const autorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  obras: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Livro',
    },
  ],
});

autorSchema.set('toObject', { getters: true, virtuals: true });

export default mongoose.model('Autor', autorSchema);
