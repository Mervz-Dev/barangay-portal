import { useEffect, useState } from "react";
import { List, Modal, Space, Row, Col } from "antd";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useBusinessesStore } from "../stores/businessesStore";

export default function Businesses() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const { businesses, fetchBusinesses } = useBusinessesStore();

  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA7h5K_56tuHTBH7pP1bpE56yWWFWH4wzg",
  });

  const handleBusinessClick = (business) => {
    setSelectedBusiness(business);
    setDirections(null); // Reset directions when a new business is selected
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirections(response);
      } else {
        setError(response.status);
      }
    }
  };

  useEffect(() => {
    if (businesses.length > 0) {
      setSelectedBusiness(businesses[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businesses]);

  useEffect(() => {
    fetchBusinesses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Businesses</h2>
      <Row gutter={16}>
        <Col span={14}>
          {selectedBusiness && (
            <div>
              <h2>{selectedBusiness.businessName}</h2>
              {isLoaded && (
                <GoogleMap
                  id="map-info"
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={selectedBusiness.coordinates}
                  zoom={13}
                >
                  <Marker position={selectedBusiness.coordinates} />

                  {directions === null && (
                    <DirectionsService
                      // required: start and end coordinates
                      options={{
                        destination: selectedBusiness.coordinates,
                        origin: {
                          lat: 13.406151553640656,
                          lng: 121.84764862060547,
                        }, // replace with your starting location
                        travelMode: "DRIVING",
                      }}
                      // required: callback method to capture the response
                      callback={directionsCallback}
                    />
                  )}

                  {directions && (
                    <DirectionsRenderer
                      // required: indicates whether to render the directions
                      options={{
                        directions: directions,
                      }}
                    />
                  )}
                </GoogleMap>
              )}
            </div>
          )}
        </Col>
        <Col span={8}>
          <div style={{ overflow: "auto", maxHeight: "400px" }}>
            <List
              itemLayout="horizontal"
              dataSource={businesses}
              renderItem={(business) => (
                <List.Item onClick={() => handleBusinessClick(business)}>
                  <List.Item.Meta
                    title={business.businessName}
                    description={business.businessOwner}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
