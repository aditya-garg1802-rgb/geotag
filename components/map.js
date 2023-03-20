import { MapContainer, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from '../styles/Home.module.css'

const Map = () => {
  var corner1 = L.latLng(31.25511170068011, 75.45963260194564),
    corner2 = L.latLng(30.789425008485473, 76.11800097467153),
    bounds = L.latLngBounds(corner1, corner2);

    var latlngs = [
    [30.977316735932675, 75.93512087113656],
    [30.941022736479066, 75.79613199244999],
    [30.83385271345394, 75.75328579676466],
    [30.8558345803778, 75.93773344404421],
  ];

  var panLoc = L.latLng(30.70612218020988, 76.76212015652146);

  //   var polygon = L.polygon(latlngs, { color: "red" }).addTo(map);
  return (
    <MapContainer
      //   center={[51.505, -0.09]}
      bounds={bounds}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: 700, width: "100%" }}
      className={styles.map}
    >
      <Polygon positions={latlngs} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
