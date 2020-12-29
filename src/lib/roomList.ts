// 나중에 라이브러리로 만들기!
/*
[ 🔎 다음과 같이 옵션을 설정하여 검색하였음. ]
    검색 종류: 원룸, 투쓰리룸, 오피스텔, 도시형생활주택
    매물 종류: 월세
    보증금/전세가: 200만 원 ~ 1억 3,000만 원
    월세: 5만 원 ~ 180만 원
*/
import region from '../sample/region.json';

export type LocationDetail = {
    type: string;
    code: string;
    id: string | null;
    name: string; //지명 (ex: 역삼동)
    full_name: string; // 지명 상세(ex: 서울시 강남구 역삼동)
    zoom: number; // 지도 확대 크기인 것으로 추정
    location: number[]; // [number, number]
    bbox: any[]; //[[number, number], [number, number]];
    // 이하는 string으로 추정
    region: string | null;
    line: string | null;
    geojson: string | null;
    complex_id: string | null;
    complex_type: string | null;
    complex_type_str: string | null;
    complext_address: string | null;
    filter: string[] | null;
    price: Price;
    subways: string[] | null;
};

export type Price = {
    has_price: boolean;
    yearPrice: string; // 따옴표로 감싸였음. "4500"
    monthPrice: string; // 따옴표로 감싸였음 ex: "300/51"
    pricePhrase: string; // ex: 2020년12월28일 기준 단기임대를 제외한 전용면적 33m²(10평) 이하인 방의 평균
};

export type LocationWrapper = {
    loc: LocationDetail;
    price: Price;
    room_type: string; //ex: 원룸
};

export type Locations = { locs: LocationWrapper[] };

export type Room = {
    is_favorited: boolean | null;
    seq: number | null;
    id: string;
    user_id: string; // 이것이 곧 이메일
    status: number;
    name: string; // 주인
    title: string; //제목
    room_type: number;
    location: number[]; //[number, number];
    random_location: number[]; //[number, number];
    complex_name: string | null; // 건물명
    premium_badge: number | null;
    hash_tags: string[]; // 옵션(ex: 주차, 단기가능, 풀옵션, 빌트인, 엘리베이터, 보안/안전 등을 배열로 구성)
    room_type_str: string; // 방 타입 ex: 오피스텔
    room_desc: string; //방 설명 ex: 오피스텔 | 12층 | 60m² | 관리비 19만
    img_url: string; // 방 대표사진 주소
    img_urls: string[]; // 방 사진 주소 배열로 구성
    is_pano: boolean;
    price_title: string; // 가격 월세의 경우 (보증금/월세) 이런 식으로...
    selling_type: number; //판매 타입 (월세, 전세, 매매인 듯?)
    is_confirm: boolean;
    confirm_type: any | null; // 샘플데이터에 일단 null밖에 없었음
    confirm_date?: string | null; // 샘플데이터에 ""밖에 없었음.
    is_quick?: boolean;
    is_messenger_activated?: boolean;
    is_extend_ui?: boolean;
    is_new_construction?: boolean;
};

export type Rooms = {
    rooms: Room[];
};

export type Region = {
    locs: Locations;
    rooms: Room[];
    offset: number;
    count: { all: number; agent: number; complex: number };
    total_str: string;
    contracts: any[]; // TODO
    next_page: number;
    features: any[]; // TODO
    ad_banner: any | null;
    total: number;
    limit: number;
    has_more: boolean;
    page: number;
};

export const { rooms }: Rooms = region;
