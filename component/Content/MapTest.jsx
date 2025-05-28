import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapTest() {
  const markers = [
    { lat: 35.1796, lng: 129.0756, title: "부산 시청" },
    { lat: 35.18, lng: 129.075, title: "부산역" },
    { lat: 35.181, lng: 129.076, title: "광안리 해수욕장" },
  ];

  return (
    <div>
      <h3>카카오맵 테스트</h3>
      <Map
        center={{ lat: 35.1796, lng: 129.0756 }}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
        level={3}
      >
        {markers.map((marker, idx) => (
          <MapMarker key={idx} position={{ lat: marker.lat, lng: marker.lng }}>
            <div>{marker.title}</div>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default MapTest;
