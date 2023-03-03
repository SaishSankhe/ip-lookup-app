import { useMap } from 'react-leaflet';

export default function ChangeMapView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
