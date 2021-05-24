import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';

/* Mapbox */
import estados_geojson from "./data/estados_geojason.geojason";
import mapboxgl from 'mapbox-gl';

const Estatal = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;

    /* Mapbox */
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const mapContainer = useRef(null);

    const [long, setLong] = useState(-99.133209);
    const [lat, setLat] = useState(19.432608);
    const [zoom, setZoom] = useState(4.5);

    const [hoveredState, _setHoveredState] = useState(null);
    const hoveredStateRef = useRef(hoveredState);

    const setHoveredState = data => {
      hoveredStateRef.current = data;
        _setHoveredState(data);
    };

    const setupGeoJson = () => {
        console.log(estados_geojson)
    }

    useEffect(() => {
        setupGeoJson()
        let map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [long, lat],
            zoom: zoom
        });


        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        map.once("load", function () {

            map.addSource('state-source', {
                'type': 'geojson',
                'data': estados_geojson
            });
            //console.log(States)

            /* map.addLayer({
                'id': 'state-layer',
                'type': 'fill',
                'source': 'state-source',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'CD116FP'],
                        '01',
                        '#5AA5D7',
                        '02',
                        '#02735E',
                        '03',
                        '#00E0EF',
                        '04',
                        '#84D0D9',
                        '05',
                        '#202359',
                        '06',
                        '#CE7529',
                        '07',
                        '#00AE6C',
                        '08',
                        '#0056A3',
                         '#ffffff'
                    ],
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        .8,
                        0.5
                    ]
                }
            }); */

            map.addLayer({
                'id': 'state-layer',
                'type': 'fill',
                'source': 'state-source',
                'layout': {},
                'paint': {
                    'fill-color': '#5AA5D7',
                    'fill-outline-color': '#FFF',
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        .8,
                        0.5
                    ]
                }
            });

            map.on('mousemove', 'state-layer', function (e) {
                if (e.features.length > 0) {
                    if (hoveredStateRef.current && hoveredStateRef.current > -1) {

                        map.setFeatureState(
                            { source: 'state-source', id: hoveredStateRef.current },
                            { hover: false }
                        );
                    }

                    //let _hoveredState = e.features[0].properties.ID;
                    let _hoveredState = e.features[0].id;
                    console.log(e.features)
                    map.setFeatureState(
                        { source: 'state-source', id: _hoveredState },
                        { hover: true }
                    );

                    setHoveredState(_hoveredState);
                }

            });

            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            map.on('mouseleave', 'state-layer', function () {
                if (hoveredStateRef.current) {
                    map.setFeatureState(
                        { source: 'state-source', id: hoveredStateRef.current },
                        { hover: false }
                    );
                }
                setHoveredState(null);
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng.toFixed(4));
                setLat(lat.toFixed(4));
                setZoom(map.getZoom().toFixed(2));
            });

        });

    }, []);

    return (
        <div className="state-map-wrapper">

            <div className="info">
                Current hovered state: <strong>{hoveredStateRef ? hoveredState : ""}</strong>
            </div>
            <div id="hoveredDetailMap" className={classes.map}>
                <div style={{ height: "100%" }} ref={mapContainer}></div>
            </div>
        </div>
    );
}

const styles = () => ({
  /* Desktop */
  map: {
    height: '800px',
    width: '800px',
    margin: 'auto'
  },

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    
  }
  
});

export default withStyles(styles)(Estatal);