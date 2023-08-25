import {GoogleMap, useLoadScript} from "@react-google-maps/api";

export const Map = ({}) => {
    // @ts-ignore
    const googleApiKey:string = process.env.GOOGLE_API_KEY
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
    });

    return (
        <div>
            {isLoaded &&     <GoogleMap
                zoom={8}
                center={{lat:45.81444, lng:15.97798}}
                mapContainerStyle={{ height: '25rem' }}

            >
            </GoogleMap>
            }

        </div>
    )
}