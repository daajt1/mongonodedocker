const mongoose = require('mongoose');


try {
    await mongoose.connect('mongodb://localhost:27017/test', {  useNewUrlParser: true,
    useUnifiedTopology: true,});
  } catch (error) {
    handleError(error);
  }


const MyModel = mongoose.model

let currentSchema = mongoose.Schema({
    id: String,
    name: String,
    packageId: Number,
    age: Number
}, {timestamps: true});


/* Uso de TTL para expirar un dato despues
de cierto tiempo */

currentSchema.index({createdAt: 1},{expireAfterSeconds: 3600});


const Mymodel = mongoose.model('Mymodel', yourSchema);

const small = new Mymodel({ size: 'small' });

// Salvar un modelo usando un dato de solo 1 valor
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

/* Guardar un arreglo de datos con tamaño chico y haciendo
los errores presentes mediante un if */

Mymodel.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
});

// Usar lotes de documentos
Mymodel.insertMany([{ size: 'small' }], function(err) {

});