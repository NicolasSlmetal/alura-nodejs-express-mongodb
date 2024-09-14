import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {values: ["Casa do código", "Alura"], message: "Editora {VALUE} inválida"}
    },
    numeroPaginas: {
      type: Number,
      // min: [10, "O número de paginas deve ser pelo menos 10 e no máximo 5000 - {VALUE} é um valor inválido"],
      // max: [5000, "O número de paginas deve ser pelo menos 10 e no máximo 5000 - {VALUE} é um valor inválido"],
      validate: [(value) =>  value >= 10 && value <= 5000, "O número de paginas deve ser pelo menos 10 e no máximo 5000"]
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;