import { Package, Pencil, Trash2 } from 'lucide-react';
import { urlImagen } from '../utils/format';

export default function TeamTable({ equipos, canDelete, onEdit, onDelete }) {
    if (!equipos.length) {
        return (
            <div className="card empty-state">
                <Package size={28} />
                <p>Aún no hay equipos registrados.</p>
            </div>
        );
    }

    return (
        <div className="equipos-section">
            <h2>Equipos</h2>

            <div className="equipos-grid">
                {equipos.map((equipos) => {
                    const imagen = urlImagen(equipos.imagen);

                    return (
                        <div className="equipo-card" key={equipos.id_equipos}>
                            <div className="equipo-card-image">
                                {imagen ? (
                                    <img
                                        src={imagen}
                                        alt={equipos.nombre}
                                        onError={(event) => {
                                            event.currentTarget.style.display = 'none';
                                        }}
                                    />
                                ) : <Package size={32} />}
                            </div>

                            <div className="equipo-card-body">
                                <h3>{equipos.nombre}</h3>
                                <p className="equipo-card-meta">
                                    {equipos.marca || 'Sin marca'} . {equipos.modelo || 'Sin modelo'}
                                </p>
                            </div>

                            <div className="actions equipo-card-actions">
                                <button className="edit" onClick={() => onEdit(equipos)}>
                                    <Pencil size={16} />
                                    Editar
                                </button>
                                {canDelete && (
                                    <button className="secondary" onClick={() => onDelete(equipos.id_equipos)}>
                                        <Trash2 size={16} />
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}