import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", 
    {
        validator: (value) => value.length > 0 && value.trim() !== "",
        message: ({path}) => `O campo ${path} não pode ser vazio`
    }
)