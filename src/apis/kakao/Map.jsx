import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import markerImage from '../../assets/image/restaurant/custom_marker.png'; // 커스텀 마커 이미지 경로
import restaurants from '../../constants/restaurants.js';

const markersData = [
    { lat: 37.3501638, lng: 127.0722692, title: 'Location 1' },
    { lat: 37.3515901453982, lng: 127.0700677, title: 'Location 2' },
    { lat: 37.3543930, lng: 127.0722107, title: 'Location 3' },
    { lat: 37.3492698, lng: 127.0700145, title: 'Location 4' },
    { lat: 37.3528441, lng: 127.0721867, title: 'Location 5' },
];


const Map = () => {
    const mapRef = useRef(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        const kakao = window.kakao;
        const container = mapRef.current;

        // 지도 기본 옵션
        const options = {
            center: new kakao.maps.LatLng(37.3517102, 127.0705293),
            level: 4,
        };

        // 지도 생성
        const map = new kakao.maps.Map(container, options);

        // 커스텀 마커 이미지 생성 (한 번만 생성하여 재사용)
        const markerImageObj = new kakao.maps.MarkerImage(
            markerImage, // 이미지 경로
            new kakao.maps.Size(32, 32) // 이미지 크기
        );

        // 마커 생성 및 지도에 추가
        markersData.forEach((data) => {
            const markerPosition = new kakao.maps.LatLng(data.lat, data.lng);

            const marker = new kakao.maps.Marker({
                position: markerPosition,
                title: data.title, // 마커 툴팁
                image: markerImageObj, // 커스텀 마커 이미지
                clickable: true,
            });

            marker.setMap(map); // 지도에 마커 추가
            kakao.maps.event.addListener(marker, 'click', () => {
                setSelectedMarker(data);
            });
        });
    }, []);



    return <MapContainer ref={mapRef}></MapContainer>;
};

export default Map;

const MapContainer = styled.div`
    width: 100%;
    max-width: 480px;
    height: calc(100vh - 100px);
`;





