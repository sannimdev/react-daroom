import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { RoomDetail as RoomDetailType } from '../lib/roomDetail';
import Gnb from '../Components/Gnb';
import CenterLayout from '../Components/CenterLayout';
import RoomOptionFrame from '../Components/RoomOptionFrame';

const getImageUrl = (photoId: string): string =>
    `https://d1774jszgerdmk.cloudfront.net/1024/${photoId}`;

const RoomComponent = styled.div`
    width: 100%;
    margin: 3rem 0;
`;

const RoomHeader = styled(RoomComponent)``;

const Summary = styled.ul`
    & > li {
        display: inline-block;

        strong {
            font-size: 2rem;
            font-weight: 800;
        }
        &:not(:last-child) {
            height: 80px;
            padding-right: 2rem;
            margin-right: 2rem;
            border-right: 1.5px solid rgba(235, 235, 235);
        }
    }
`;

const SummaryCard = styled.div`
    width: 100%;
    user-select: none;

    & > h5 {
        margin-bottom: 0.78rem;
        &.gray {
            color: rgba(120, 120, 120);
        }
    }

    &.primary {
        color: rgb(20, 118, 252);
    }
`;

const RoomContent = styled(RoomComponent)`
    & > div {
        margin: 2rem 0;
    }
`;

const Specification = styled.dl`
    width: 100%;
    border-top: 2px solid #000;

    & > dt,
    & > dd {
        font-size: 0.9rem;
        display: inline-block;
        width: 16.66%;
        height: 3rem;
        line-height: 3rem;
        vertical-align: middle;
    }

    & > dt::before {
        color: rgb(50, 50, 50);
        content: '·';
        margin-right: 1rem;
    }

    & > dt {
        color: rgb(135, 135, 135);
    }

    & > dd:nth-child(3n) {
        clear: both;
    }
`;

const RoomContext = styled.div`
    .room-title {
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.2rem;
        margin-bottom: 20px;
    }
    .room-text {
        font-size: 1.1rem;
        line-height: 1.4rem;
    }
`;

// ----

type Props = {
    room: RoomDetailType;
};

function printRoomSize(isSquareMeter: boolean, roomSize: number): string {
    return isSquareMeter ? `${roomSize}㎡` : `${Math.round(roomSize / 3.3)}평`;
}

function RoomDetail({ room: roomDetail }: Props) {
    const { room } = roomDetail;
    const sellingType = ['월세'];
    const [isSquareMeter, setSquareMeter] = useState(true);
    const [size, setSize] = useState(printRoomSize(true, room.room_size || 0));

    const onRoomSizeClick = useCallback(() => {
        setSquareMeter(!isSquareMeter);
        setSize(printRoomSize(isSquareMeter, room.room_size));
    }, [isSquareMeter, room.room_size]);

    const photos = room.photos.map((photoId, idx) => ({
        src: getImageUrl(photoId),
        width: idx === 0 ? 10 : 2,
        height: idx === 0 ? 10 : 3,
        srcSet: undefined,
        title: undefined,
        source: {
            download: '',
            fullscreen: getImageUrl(photoId),
            regular: getImageUrl(photoId),
            thumbnail: getImageUrl(photoId),
        },
    }));

    // react-image
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }, []);

    return (
        <>
            <Gnb />
            <CenterLayout width='1180px'>
                <RoomHeader>
                    <Summary>
                        <li>
                            <SummaryCard>
                                <h5 className='gray'>{room.room_type_str}</h5>
                                <p>
                                    <strong>
                                        {sellingType[room.selling_type]} {room.price_title}
                                    </strong>
                                    만 원
                                </p>
                            </SummaryCard>
                        </li>
                        <li>
                            <SummaryCard>
                                <h5 className='gray'>전용 면적</h5>
                                <p>
                                    <strong onClick={() => onRoomSizeClick()}>{size}</strong>
                                </p>
                            </SummaryCard>
                        </li>
                        <li>
                            <SummaryCard className='primary'>
                                <h5>한 달 예상 주거비</h5>
                                <p>
                                    <strong>{room.month_total_cost_str} + α</strong>
                                </p>
                            </SummaryCard>
                        </li>
                    </Summary>
                </RoomHeader>
                <RoomContent>
                    <Specification>
                        <dt>해당층/건물층</dt>
                        <dd>
                            {room.room_floor_str}/{room.building_floor_str}
                        </dd>

                        <dt>전용/공급면적</dt>
                        <dd>
                            {room.room_size}/{room.provision_size}
                        </dd>

                        <dt>방 수/ 욕실 수</dt>
                        <dd>
                            {room.beds_num}/{room.bath_num}
                        </dd>

                        <dt>방향</dt>
                        <dd>{room.direction_str}</dd>

                        <dt>난방종류</dt>
                        <dd>{room.heating}</dd>

                        <dt>빌트인</dt>
                        <dd>{room.built_in_str}</dd>

                        <dt>건물 주차 수</dt>
                        <dd>{room.parking_num}</dd>

                        <dt>세대 당 주차 수</dt>
                        <dd>{room.parking_average}</dd>

                        <dt>엘리베이터</dt>
                        <dd>{room.elevator_str}</dd>

                        <dt>반려동물</dt>
                        <dd>{room.animal_str}</dd>

                        <dt>베란다/발코니</dt>
                        <dd>{room.balcony_str}</dd>

                        <dt>전세자금대출</dt>
                        <dd>{room.loan_str}</dd>

                        <dt>입주 가능일</dt>
                        <dd>{room.moving_date}</dd>

                        <dt>주 용도</dt>
                        <dd>{room.building_use_types_str}</dd>

                        <dt>{room.building_approval_type_str}</dt>
                        <dd>{room.building_approval_date_str}</dd>

                        <dt>최초 등록일</dt>
                        <dd>{room.saved_time_str}</dd>

                        <dt>사용료 지불 옵션</dt>
                        <dd>{room.personal_maintenance_items_str.join(', ')}</dd>
                    </Specification>
                    <div>
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map((x) => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title,
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <RoomContext>
                        {/* 소개 */}
                        <div className='room-title'>{room.title}</div>
                        <div className='room-text'>{room.memo}</div>
                    </RoomContext>
                    <div>
                        {/* 가격정보, 옵션, 위치 및 주변시설, 이 중개사무소의 다른 방 */}
                        <ul>
                            <li>가격정보</li>
                            <li>옵션</li>
                            <li>위치 및 주변시설</li>
                            <li>이 중개사무소의 다른 방</li>
                        </ul>
                        <div>
                            <h3>가격 정보</h3>
                            <div>
                                <dl>
                                    <dt>한 달 예상 주거비용</dt>
                                    <dd>
                                        {room.month_total_cost_str} ({room.month_total_str})
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <RoomOptionFrame title={'옵션'} options={room.room_options} />
                        <RoomOptionFrame title={'보안 / 안전시설'} options={room.safeties} />
                    </div>
                </RoomContent>
            </CenterLayout>
        </>
    );
}

export default React.memo(RoomDetail);
