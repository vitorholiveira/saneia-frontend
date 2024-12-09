import React from 'react';
import { useEffect, useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Tooltip, ScaleControl, GeoJSON, useMapEvents } from 'react-leaflet';
import { latLng as latLngObject } from 'leaflet';
// import TooltipCircle from './TooltipCircle';
import 'leaflet/dist/leaflet.css';
import './index.css';

export const Map = (props) => {

  const bounds = [
    [-90, -180],
    [90, 180]
  ];

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={props.center}
        zoom={props.zoom}
        style={{ height: props.styleHeight, width: props.styleWidth }}
        maxBounds={bounds}
        minZoom={1.0}
        maxBoundsViscosity={1.0}
      >
        <ScaleControl imperial={false} />
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Esri World Street Map">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Esri World Topo Map">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Esri World Imagery">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url={"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}
            />
          </LayersControl.BaseLayer>

          {props.children}
          
        </LayersControl>
      </MapContainer>
    ),
    [props.center, props.styleHeight, props.styleWidth, props.zoom, props.children]
  )
  return (
    <div>
      {displayMap}
    </div>
  )
}

export const LocationMarkerOnClick = ({ latLong, setLatLong }) => {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    click(e) {
      const minLng = -179.99999999999997;
      const maxLng = 179.99999999999997;

      const adjustedLng = Math.max(minLng, Math.min(maxLng, e.latlng.lng))
      setPosition({ lat: e.latlng.lat, lng: adjustedLng }); // Ajuste a posição
      map.setView({ lat: e.latlng.lat, lng: adjustedLng }, map.getZoom()); // Ajuste a visualização do mapa
      setLatLong(prevState => ({
        ...prevState,
        latitude: e.latlng.lat,
        longitude: adjustedLng
      }));
    },
  })

  useEffect(() => {
    const { latitude, longitude } = latLong;
    if (latitude !== null && longitude !== null) {
      let coordinates = latLngObject(latLong.latitude, latLong.longitude);
      setPosition(coordinates)
      map.setView(coordinates, map.getZoom())
    } else {
      setPosition(null);
    }
  }, [latLong])

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export const LocationMarker = ({ position }) => {
  return (position[0] === null || position[1] === null)  ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export const DescriptionsLocationMarkers = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
          <Marker
            position={[item.geoDescriptionStored.descriptionInformation.latitude, item.geoDescriptionStored.descriptionInformation.longitude]}
            eventHandlers={{
              click: (e) => {
                console.log('oi');
              },
            }} >

            <Tooltip>
              <p><b>Sítio Geológico</b>:{'a'}</p>
              <p><b>Autor</b>: {'b'}</p>
              <p><b>Data</b>: {'c'} </p>
            </Tooltip>

          </Marker>
        ))}
    </>
  )
}