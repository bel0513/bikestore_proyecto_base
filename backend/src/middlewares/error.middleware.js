const AppError = require('../utils/AppError');
const multer = require('multer');

function errorHandler(error, req, res, next) {
    if (error instanceof multer.MulterError) {
        const message = error.code === 'LIMIT_FILE_SIZE'
            ? 'La imagen no puede superar 2 MB'
            : 'No se pudo procesar la imagen subida';

        return res.status(400).json({ ok: false, message });
    }

    if(error instanceof AppError) {
        return res.status(error.status).json({
            ok: false,
            message: error.message
        });
    }

    console.error(error);

    res.status(500).json({
        ok: false,
        message: 'Error interno del servidor'
    });
}
module.exports = errorHandler;