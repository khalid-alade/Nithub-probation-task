import React, { lazy, Suspense, useState, useEffect } from "react";

const Shipments = lazy(() => import("./Shipments"));

function App() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShipments, setShowShipments] = useState(false);

  useEffect(() => {
    fetch("https://api.example.com/shipments")
      .then((res) => res.json())
      .then((data) => {
        setShipments(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Logistics Dashboard</h1>
      <button onClick={() => setShowShipments(true)}>Load Shipments</button>

      {showShipments && (
        <Suspense fallback={<div>Loading shipments...</div>}>
          <Shipments shipments={shipments} loading={loading} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
