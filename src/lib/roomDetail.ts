import { Room as OtherRoom } from './roomList';
import room from '../sample/room.json';

export type Agent = {
    id: string;
    email: string;
    name: string;
    facename: string;
    address: string;
    location: number[] | null; // [0, 0]
    reg_id: string;
    business_id: string;
    saved_time: string;
    active: boolean;
    is_primary: boolean;
    user_name: string;
    user_phone: string;
    user_safe_phone: string;
    user_tel: string | null;
    users_idx: number;
    sub_emails: null;
    is_premium: boolean;
    review_best_count: number;
    review_count: number;
    is_messenger_actived: boolean;
    profile_url: string;
    message: string;
    since: string;
    is_awards: boolean;
    is_verify_agent_tel: boolean;
    emails: string[];
    role_type: string | null;
    agent_tel: string;
};

export type Room = {
    is_favorited: boolean | null;
    favorited_count: number;
    seq: number;
    id: string;
    user_id: string;
    status: number;
    title: string;
    memo: string;
    private_memo: string | null;
    room_type: number;
    maintenance_option: number;
    room_size: number;
    provision_size: number | null;
    pano: null;
    moving_date: string | null;
    card: boolean;
    photos: string[];
    photo: {
        key: string;
        desc: string;
    }[];
    price_info: number[][];
    address: string;
    location: number[];
    random_location: number[];
    shorten_url: string;
    agent_id: string | null;
    division: boolean;
    duplex: boolean;
    full_option: boolean;
    complex_id: string | null;
    dong: string | null;
    ho: string | null;
    contract_size: number | null;
    enter_date: number | string | null;
    saved_time_str: string;
    is_lately: boolean;
    lately_time_str: string | null;
    room_type_str: string; //'원룸(주방 분리형(1.5룸))';
    room_type_main_str: string; //'원룸(분리형)';
    maintenance_items_str: string[]; //['청소비', '수선유지비', '기타'];
    heating: string; //'개별난방';
    room_floor_str: string; //'3층';
    building_floor_str: string; //'3층';
    maintenance_cost_str: string; //'3만 원';
    full_options: string[]; //['에어컨', '세탁기', '냉장고'];
    etc_options: string[]; //['옷장', '신발장', '인덕션', '전자도어락'];
    price_hash_tags: string[];
    option_hash_tags: string[]; //['#풀옵션'];
    detail_hash_tags: string[]; // ['#빌트인'];
    hash_tags: string[]; // ['풀옵션', '빌트인'];
    price_title: string; // '500/50';
    price_info_str: string[][]; // [['500', '50']];
    animal_str: string | null; //'불가능';
    parking_str: string | null; // '불가';
    elevator_str: string | null; //'없음';
    loan_str: string | null; // '불가능';
    built_in_str: string | null; // '빌트인 주방';
    balcony_str: string | null; //'없음';
    duplex_str: string | null;
    division_str: string | null; // '분리형';
    short_lease_str: string | null; // '불가능';
    is_show: boolean;
    is_show_new: boolean;
    is_confirm: boolean;
    confirm_type: null;
    confirm_date_str: string;
    is_quick: boolean | null;
    selling_type: number;
    month_total_str: string; // '월세 + 관리비';
    month_total_cost_str: string; // '53만 원';
    building_use: null;
    deungbon_summary: {
        detailScore: string;
        regCommentTagMapList:
            | {
                  lawyerCmmntTagCode?: string | null;
                  lawyer_comment_tag_name?: string | null;
                  lawyer_comment_tag_context?: string | null;
              }[]
            | null;
        grade: number;
        grade_message: string;
        report_url: null;
        report_date: string;
    } | null;
    beds_num: number;
    bath_num: number;
    show_watermark: boolean; /////////
    is_detached_house: boolean;
    is_direct: boolean;
    is_primary_approval: boolean;
    full_jibun_address_str: string | null; //'서울시 강남구 역삼동 00-0';
    full_road_address_str: string | null;
    full_jibun_address2_str: string | null; // '서울시 강남구 역삼동 00-0;
    full_road_address2_str: string | null; //'서울시 강남구 테헤란로 1번길 00-0';
    direction_str: string | null; // '남동';
    parking_num: number | null; // 0;
    parking_average: number | null; // 0;
    building_use_types_str: string[]; // ['단독주택'];
    building_approval_type_str: string | null; // '사용승인일';
    building_approval_date_str: string | null; // '1900.10.00';
    personal_maintenance_items_str: string[]; // ['난방비', '전기료'];
    is_maintenance_cost_str_month_prefix: boolean; // true;
    is_show_detail_address: boolean; // false;
    is_toggle_detail_address: boolean; // true;
    is_bubble_cluster_map: boolean; //  false;
    is_new_construction: boolean; // false;
    room_options: RoomOption[] | null;
    safeties: RoomOption[] | null;
};

export type RoomOption = {
    seq: number;
    name: string;
};

type User = {
    idx: number; //123456;
    email: string; // 'user@example.com';
    name: string; // '홍길동';
    active: boolean; // true;
    inquery_phone: string | null;
    phone: string; // '01000000000';
    tel: string | null; // '02-0000-0000';
    safe_phone: string | null; // '05000000000';
    yellow_id?: null;
    is_subscribe: boolean | null;
    position?: null;
    profile_url: string; // 'https://링크';
    message: string; // '[매물번호:012030123] 이거 보고 연락드립니다. http://링크L';
    role_type: string | null; // '대표공인중개사';
};

export type RoomDetail = {
    is_messenger_sender_agented: boolean;
    ios_score_height: number;
    agent: Agent | null;
    is_consultation_actived: boolean;
    is_consultation_receipted: boolean;
    detail_shop: {
        use: boolean;
        link: string;
    };
    bubble_image: string | null;
    is_consultation_sender_agented: boolean;
    room: Room;
    is_messenger_actived: boolean;
    score: null;
    review?: {
        review_count_good: number;
        reviews: any[];
        review_count: number;
    };
    is_messenger_receipted: boolean;
    contact: {
        sms_number: string;
        sms_message: string;
        call_number: string;
        show_number: string;
    };
    other_rooms?: OtherRoom[];
    shinhanbank?: {
        deposit: number;
        location: number;
    };
    messenger_send_alimtalk_contents: string;
    user: User;
    messenger_bubble_contents: string;
};

export const roomDetail: RoomDetail = room;
