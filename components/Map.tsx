import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import React from "react";
import {useState} from "react";
import {MarkerItem} from "@/components/map.models";
import MapMouseEvent = google.maps.MapMouseEvent;

export const Map = ({}) => {
    const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(
        null
    );
    const [markerList, updateMarkerList] = useState<MarkerItem[]>([])
    const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey as string,
    });

    const onMapLoadHandler = (map: google.maps.Map)=>{
        setMapInstance(map);
    }

    const addMarker = (position: { lng: number | undefined; lat: number | undefined })=>{
        updateMarkerList([...markerList, {id: Math.random(), position, title: `marker at position: ${position.lat} `}])
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
                    { markerList.length > 0 && markerList.map((markerItem: MarkerItem)=>{
                            const { id, position, infoWindowContent } =
                                markerItem;
                            return <React.Fragment key={id}>
                                <Marker position={markerItem.position}></Marker>
                            </React.Fragment>
                        })

                    }
            </GoogleMap>
            }

        </div>
    )
}