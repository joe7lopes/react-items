import React from 'react';

const DeleteItemPannel = ({item, onDelete}) => {


    return (
        <div id="confirmDelete" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Eliminar Loja</h4>
                        </div>
                        <div className="modal-body">
                            <p>Tem a certeza que pretende eliminar a loja
                                <strong>{" " + item.name + " "}</strong> ?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={onDelete}>OK</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>

                </div>
            </div>
    );

};



export default DeleteItemPannel;