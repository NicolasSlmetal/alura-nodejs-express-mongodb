import mongoose from "mongoose";
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map(erro => 
        {if (erro instanceof mongoose.Error.CastError)
          erro.message = `O valor do campo ${erro.path} é inválido`;
        return erro.message
        })
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidacao;