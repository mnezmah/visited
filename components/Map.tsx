import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import React, {ReactNode} from "react";
import {useState} from "react";
import {MarkerItem} from "@/components/map.models";
import MapMouseEvent = google.maps.MapMouseEvent;
import {MapMarker} from "@/components/MapMarker";

export const Map = ({}) => {
    const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(
        null
    );
    const [markerList, updateMarkerList] = useState<MarkerItem[]>([])
    const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey as string,
    });
    const [activeMarker, setActiveMarker] = useState<google.maps.LatLng | null>(
        null
    );
    const [infoBoxContent, setInfoBoxContent] = useState<string | React.ReactNode>(undefined);

    const onMapLoadHandler = (map: google.maps.Map)=>{
        setMapInstance(map);
    }

    const addMarker = (position: { lng: number | undefined; lat: number | undefined })=>{
        updateMarkerList([...markerList, {id: Math.random(), position, title: `marker at position: ${position.lat} `}] as MarkerItem[])
    }

    const onMapClickHandler = (event: MapMouseEvent)=>{
        mapInstance?.addListener('contextmenu', ()=>{
            const position = {
                lat: event.latLng?.lat(),
                lng: event.latLng?.lng()
            }
addMarker(position)
        })
    }

    const markerOnclick = (
        position: google.maps.LatLng,
        infoWindowContent: ReactNode
    ) => {
        const currentLocationMarkers = markerList?.filter(
            (marker) =>
                marker.position.lat === position.lat &&
                marker.position.lng === position.lng
        );


        setInfoBoxContent(<div>{infoWindowContent}</div>);
        setActiveMarker(position);
    };

    return (
        <div>
            {isLoaded &&
                <GoogleMap
                    zoom={8}
                    center={{lat:45.81444, lng:15.97798}}
                    mapContainerStyle={{ height: '25rem' }}
                    onLoad={onMapLoadHandler}
                    onClick={onMapClickHandler}

            >
                    {markerList?.map((markerItem: MarkerItem) => {
                        const { id, position, infoWindowContent, title } =
                            markerItem;
                        return (
                            <React.Fragment key={id}>
                                <MapMarker
                                    key={id}
                                    markerItem={markerItem}
                                    onMarkerClick={() =>
                                        markerOnclick(
                                            position,
                                            title
                                        )
                                    }
                                />
                                {activeMarker && (
                                    <InfoWindow
                                        position={activeMarker}
                                        onCloseClick={() => {
                                            setActiveMarker(null);
                                        }}
                                    >
                                        {infoBoxContent}
                                    </InfoWindow>
                                )}
                            </React.Fragment>
                        );
                    })}
            </GoogleMap>
            }

        </div>
    )
}