export interface MarkerItem {
    id: string | number;
    position: google.maps.LatLng;
    title: string;
    onClickHandler?: (
        event: google.maps.MapMouseEvent,
        location: google.maps.LatLng
    ) => void;
    infoWindowContent?: string | React.ReactNode;
}