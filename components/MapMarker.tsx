import {Marker, MarkerProps} from "@react-google-maps/api";
import {MarkerItem} from "@/components/map.models";

export interface MapMarkerProps extends Omit<MarkerProps, 'position'> {
    markerItem: MarkerItem;
    onMarkerClick: (position: google.maps.LatLng) => void;
}

export const MapMarker = ({ markerItem, onMarkerClick }: MapMarkerProps) => {
    const { color } = markerItem;

    const defaultMarkerIcon = {
        path: 'M10,246l7.3-21.8l87.3-87.4L61,93.1c4-4,8.2-7.3,12.7-10c4.5-2.7,8.9-4.7,13.2-6c4.4-1.3,8.7-2,13-2c10.6,0,19.4,3.6,26.6,10.7l51-51l-7.2-7.2c-2.1-2.1-3.1-4.5-3.1-7.3s1-5.2,3-7.2c2-2,4.5-3,7.3-3c2.8,0,5.3,1,7.2,3L243,71.3c2,2,3,4.4,3,7.2c0,2.8-1,5.3-3,7.3c-2,2-4.4,3-7.2,3s-5.3-1-7.4-3.1l-7.2-7.2l-51,51c7.1,7.1,10.7,16,10.7,26.6c0,6.5-1.5,13.1-4.5,19.9s-7.5,13.1-13.5,19l-43.7-43.7l-87.4,87.3L10,246z',
        fillColor: color ?? 'red',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 1,
        scale: 0.12,
    };
    const {
        title,
        position,
        id,
    } = markerItem;

    return (
        <Marker
            key={id}
            onClick={() => onMarkerClick(position)}
            position={position}
            title={title}
            icon={defaultMarkerIcon}
        />
    );
};