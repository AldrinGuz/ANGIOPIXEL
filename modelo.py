import tensorflow as tf

# Cargar el modelo guardado en archivo.h5
modelo = tf.keras.models.load_model('archivo.h5')

# Mostrar un resumen del modelo (opcional)
modelo.summary()
