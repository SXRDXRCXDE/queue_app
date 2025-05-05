import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
import {MapContainer, TileLayer, Marker, useMapEvents, useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {FaLocationArrow} from "react-icons/fa";
import locationIndicator from '../assets/homeIndicator.svg';

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

function LocationPicker({ setLocation }) {
    useMapEvents({
        click(e) {
            setLocation(e.latlng);
        },
    });
    return null;
}

function FlyToLocation({ position }) {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.flyTo([position.lat, position.lng], 16, {
                animate: true,
                duration: 0.5 // Adjust this value to control the speed (in seconds)
            });
        }
    }, [position, map]);

    return null;
}


const MapSelector = forwardRef(({ onLocationSelect, externalLocation }, ref) => {
    const [location, setLocation] = useState({ lat: 41.3111, lng: 69.2797 }); // Default: Tashkent
    const mapRef = useRef(null);

    useEffect(() => {
        if (externalLocation) {
            setLocation(externalLocation);
        }
    }, [externalLocation]);

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
        if (onLocationSelect) {
            onLocationSelect(newLocation);
        }

        localStorage.setItem('selectedLocation', JSON.stringify(newLocation));

        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newLocation.lat}&lon=${newLocation.lng}`)
            .then(res => res.json())
            .then(data => {
                const address = data.display_name;
                localStorage.setItem('selectedAddress', address);
                console.log('Address saved to localStorage:', address);
                window.dispatchEvent(new Event('location-updated'));
            })
            .catch(err => console.error('Error fetching address:', err));
    };

    const handleFindMe = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                handleLocationChange(userLocation);

                if (mapRef.current) {
                    mapRef.current.setView([userLocation.lat, userLocation.lng], 16, {
                        animate: true,
                    });
                }
            },
            () => {
                alert('Could not get your location');
            }
        );
    };

    // ✅ Expose handleFindMe to parent
    useImperativeHandle(ref, () => ({
        triggerFindMe: handleFindMe,
    }));

    const selectedIcon = new L.Icon({
        iconUrl: locationIndicator,
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <MapContainer
                center={location}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                whenCreated={(mapInstance) => {
                    mapRef.current = mapInstance;
                }}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationPicker setLocation={handleLocationChange} />
                <Marker icon={selectedIcon} position={location} />
                <FlyToLocation position={location} />
            </MapContainer>

            {/* Optional internal "Find Me" button */}
            <button
                onClick={handleFindMe}
                style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 15,
                    zIndex: 1000,
                    padding: '20px',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '100%',
                    cursor: 'pointer',
                }}
            >
                <FaLocationArrow color={'#254EDB'} size={40} />
            </button>
        </div>
    );
});

export default MapSelector;
