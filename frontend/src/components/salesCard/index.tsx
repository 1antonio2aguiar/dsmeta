import NotificationButton from '../notificationButton'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css';
import { useState } from 'react';

function SalesCard() {
    
    // pega a data de uma ano atras
    const date = new Date(new Date().setDate(new Date().getDate() - 365));
    
    const [minDate, setMinDate] = useState();
    const [maxDate, setMaxDate] = useState();


    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-form-control-container">
            <DatePicker
                selected={minDate}
                onChange={(date: Date) => setMinDate(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
            />
            </div>
            <div className="dsmeta-form-control-container">
            <DatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
            />
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-apartir-de-992">ID</th>
                            <th className="show-apartir-de-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-apartir-de-992">Visitas</th>
                            <th className="show-apartir-de-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-apartir-de-992">1</td>
                            <td className="show-apartir-de-576">19/09/1978</td>
                            <td>Tonhas</td>
                            <td className="show-apartir-de-992">15</td>
                            <td className="show-apartir-de-992">10</td>
                            <td>R$ 4673,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
  
  export default SalesCard;