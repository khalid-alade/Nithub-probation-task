import React, { useState, useEffect, useContext } from 'react';
import DataTable from 'react-data-table-component';
import { ThemeContext } from '../ThemeContext';
import { FaSpinner } from 'react-icons/fa';

export default function Table() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch initial data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://shipment-data-server.vercel.app/api/shipments');
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // WebSocket for real-time updates
    useEffect(() => {
        const ws = new WebSocket('wss://shipment-data-server.vercel.app/api/shipments');

        ws.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (message.type === 'STATUS_UPDATE') {
                // Update the status of the shipment in the data state
                setData((prevData) =>
                    prevData.map((shipment) =>
                        shipment.id === message.data.id ? { ...shipment, status: message.data.status } : shipment
                    )
                );
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Cleanup on component unmount
        return () => ws.close();
    }, []);

    const customStyles = {
        headRow: {
            style: {
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundColor: '#D7DBE4', // Light gray background
                color: '#333', // Dark text color
            },
        },
        rows: {
            style: {
                backgroundColor: theme === 'light' ? 'white' : '#1a202c',
                color: theme === 'light' ? 'black' : '#ffffff',
            },
        },
    };

    const columns = [
        {
            name: 'Date',
            selector: (row) => row.date,
        },
        {
            name: 'Vehicle No',
            selector: (row) => row.vehicle,
        },
        {
            name: 'Origin',
            selector: (row) => row.origin,
        },
        {
            name: 'Destination',
            selector: (row) => row.destination,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
        },
    ];

    if (loading) {
        return (
            <div className="flex justify-center p-4">
                <FaSpinner className="spinner" size={30} data-testid="spinner" />
            </div>
        );
    }

    return (
        <div className="mt-4 rounded-xl" data-test-id="table-for-data">
            <DataTable
                customStyles={customStyles}
                columns={columns}
                data={data}
                responsive
            />
        </div>
    );
}