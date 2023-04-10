import '../css/LiveStatus.css'
import Button from '../../components/jsx/Button';
import { useState, useEffect } from 'react';


export default function LiveStatus() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'faeca5e3dfmsh04ba3f5b4887182p1f2772jsnc0b401e4b225',
            'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
        }
    };

    let api1Response = [
        {
            "id": "2739",
            "display": "12312 - KALKA MAIL (KLK - HWH)",
            "source_name": "KALKA",
            "source_name_hi": "कालका",
            "source_code": "KLK",
            "destination_name": "HOWRAH JN",
            "destination_name_hi": "हावड़ा जं.",
            "destination_code": "HWH",
            "runson": "1111111"
        }
    ];

    // console.log(api1Response[0].id)

    let apiResponse2 = {
        "details": {
            "id": "2739",
            "number": "12312",
            "name": "KALKA MAIL",
            "name_hi": "NETAJI EXPRESS",
            "source": "KALKA",
            "source_hi": "कालका",
            "source_code": "KLK",
            "destination": "HOWRAH JN",
            "destination_hi": "हावड़ा जं.",
            "destination_code": "HWH",
            "type": "--",
            "type_description": "--",
            "daysStr": "Daily",
            "days": "All Days"
        },
        "train": {
            "trs_date": "Wed, 5th Apr 12:00 AM",
            "trs_date_full": "2023-04-05 23:55:00",
            "trs_id": "4851713",
            "startDayDiff": "0",
            "departed": "1",
            "terminated": "0",
            "lastUpdated": "Fri, 7th Apr 5:20 AM",
            "lastUpdatedActual": "5 hours ago",
            "date_updated": "just now",
            "date_updated_full": "2023-04-06 23:51:54",
            "alive": "1",
            "source_name": "CHANDAULI MJHWR",
            "source_name_hi": "चंदौला माझवर",
            "source_code": "CDMR",
            "lateMins": "168",
            "alertMsg": "",
            "alertMsg_hi": "",
            "type": "0",
            "source_distance": "1109",
            "source_status": "departed",
            "tds_date_full": "2023-04-07 10:22:00"
        },
        "errorMsg": "",
        "stations": [
            {
                "source_name": "KALKA",
                "source_name_hi": "कालका",
                "source_code": "KLK",
                "is_source": "1",
                "is_destination": "0",
                "arrival_time": "00:00:00",
                "departure_time": "23:55:00",
                "actual_arrival_time": "00:00:00",
                "actual_departure_time": "23:55:00",
                "day": "1",
                "actual_day": "1",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "0",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "30.83805700",
                "longitude": "76.93214900",
                "arrival": "Starts",
                "departure": "23:55"
            },
            {
                "source_name": "CHANDI MANDIR",
                "source_name_hi": "चंडी मंदिर",
                "source_code": "CNDM",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "00:13:00",
                "departure_time": "00:15:00",
                "actual_arrival_time": "03:01:00",
                "actual_departure_time": "03:03:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "24",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "30.72719100",
                "longitude": "76.88695900",
                "arrival": "03:01",
                "departure": "03:03"
            },
            {
                "source_name": "CHANDIGARH",
                "source_name_hi": "चंडीगढ़",
                "source_code": "CDG",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "00:28:00",
                "departure_time": "01:25:00",
                "actual_arrival_time": "03:16:00",
                "actual_departure_time": "04:13:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "38",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "30.70189730",
                "longitude": "76.82200000",
                "arrival": "03:16",
                "departure": "04:13"
            },
            {
                "source_name": "AMBALA CANT JN",
                "source_name_hi": "अंबाला कैंट जं.",
                "source_code": "UMB",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "02:10:00",
                "departure_time": "02:20:00",
                "actual_arrival_time": "04:58:00",
                "actual_departure_time": "05:08:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "105",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "30.33865800",
                "longitude": "76.82670600",
                "arrival": "04:58",
                "departure": "05:08"
            },
            {
                "source_name": "KURUKSHETRA JN",
                "source_name_hi": "कुरुक्षेत्र जं.",
                "source_code": "KKDE",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "02:50:00",
                "departure_time": "02:52:00",
                "actual_arrival_time": "05:38:00",
                "actual_departure_time": "05:40:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "147",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "29.96910000",
                "longitude": "76.85245500",
                "arrival": "05:38",
                "departure": "05:40"
            },
            {
                "source_name": "KARNAL",
                "source_name_hi": "करनाल",
                "source_code": "KUN",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "03:15:00",
                "departure_time": "03:17:00",
                "actual_arrival_time": "06:03:00",
                "actual_departure_time": "06:05:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "180",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "29.69431600",
                "longitude": "76.96957100",
                "arrival": "06:03",
                "departure": "06:05"
            },
            {
                "source_name": "PANIPAT JN",
                "source_name_hi": "पानीपत जं.",
                "source_code": "PNP",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "03:41:00",
                "departure_time": "03:43:00",
                "actual_arrival_time": "06:29:00",
                "actual_departure_time": "06:31:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "214",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "29.38901800",
                "longitude": "76.96386300",
                "arrival": "06:29",
                "departure": "06:31"
            },
            {
                "source_name": "SAMALKHA",
                "source_name_hi": "समालखा",
                "source_code": "SMK",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "03:57:00",
                "departure_time": "03:59:00",
                "actual_arrival_time": "06:45:00",
                "actual_departure_time": "06:47:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "231",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "29.24031200",
                "longitude": "77.00317400",
                "arrival": "06:45",
                "departure": "06:47"
            },
            {
                "source_name": "GANAUR",
                "source_name_hi": "गन्नौर",
                "source_code": "GNU",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "04:10:00",
                "departure_time": "04:12:00",
                "actual_arrival_time": "06:58:00",
                "actual_departure_time": "07:00:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "243",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "29.13079600",
                "longitude": "77.01077000",
                "arrival": "06:58",
                "departure": "07:00"
            },
            {
                "source_name": "SONIPAT",
                "source_name_hi": "सोनीपत",
                "source_code": "SNP",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "04:25:00",
                "departure_time": "04:27:00",
                "actual_arrival_time": "07:13:00",
                "actual_departure_time": "07:15:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "259",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.98907300",
                "longitude": "77.01699300",
                "arrival": "07:13",
                "departure": "07:15"
            },
            {
                "source_name": "NEW ADRESHNAGARH",
                "source_name_hi": "आदर्श नगर दिल्ली",
                "source_code": "ANDI",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "04:42:00",
                "departure_time": "04:44:00",
                "actual_arrival_time": "07:30:00",
                "actual_departure_time": "07:32:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "293",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.71426500",
                "longitude": "77.16676700",
                "arrival": "07:30",
                "departure": "07:32"
            },
            {
                "source_name": "SUBZI MANDI",
                "source_name_hi": "सब्जी मंडी",
                "source_code": "SZM",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "05:28:00",
                "departure_time": "05:30:00",
                "actual_arrival_time": "08:16:00",
                "actual_departure_time": "08:18:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "300",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.66871300",
                "longitude": "77.19972600",
                "arrival": "08:16",
                "departure": "08:18"
            },
            {
                "source_name": "DELHI",
                "source_name_hi": "दिल्ली",
                "source_code": "DLI",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "06:00:00",
                "departure_time": "06:15:00",
                "actual_arrival_time": "08:48:00",
                "actual_departure_time": "09:03:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "302",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.66159600",
                "longitude": "77.22813600",
                "arrival": "08:48",
                "departure": "09:03"
            },
            {
                "source_name": "GHAZIABAD",
                "source_name_hi": "गाजियाबाद",
                "source_code": "GZB",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "07:00:00",
                "departure_time": "07:02:00",
                "actual_arrival_time": "09:48:00",
                "actual_departure_time": "09:50:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "322",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.65007200",
                "longitude": "77.43146900",
                "arrival": "09:48",
                "departure": "09:50"
            },
            {
                "source_name": "KHURJA JN",
                "source_name_hi": "खुर्जा जं.",
                "source_code": "KRJ",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "07:58:00",
                "departure_time": "08:00:00",
                "actual_arrival_time": "10:46:00",
                "actual_departure_time": "10:48:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "385",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "28.20624700",
                "longitude": "77.81888000",
                "arrival": "10:46",
                "departure": "10:48"
            },
            {
                "source_name": "ALIGARH JN",
                "source_name_hi": "अलीगढ़ जं.",
                "source_code": "ALJN",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "08:30:00",
                "departure_time": "08:35:00",
                "actual_arrival_time": "11:18:00",
                "actual_departure_time": "11:23:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "428",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "27.88919400",
                "longitude": "78.07416900",
                "arrival": "11:18",
                "departure": "11:23"
            },
            {
                "source_name": "TUNDLA JN",
                "source_name_hi": "टूंडला जं.",
                "source_code": "TDL",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "09:50:00",
                "departure_time": "09:55:00",
                "actual_arrival_time": "12:38:00",
                "actual_departure_time": "12:43:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "506",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "27.20784700",
                "longitude": "78.23338500",
                "arrival": "12:38",
                "departure": "12:43"
            },
            {
                "source_name": "FIROZABAD",
                "source_name_hi": "फिरोजाबाद",
                "source_code": "FZD",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "10:13:00",
                "departure_time": "10:15:00",
                "actual_arrival_time": "13:01:00",
                "actual_departure_time": "13:03:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "523",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "27.14714500",
                "longitude": "78.38642100",
                "arrival": "13:01",
                "departure": "13:03"
            },
            {
                "source_name": "SHIKOHABAD JN",
                "source_name_hi": "शिकोहाबाद जं.",
                "source_code": "SKB",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "10:38:00",
                "departure_time": "10:40:00",
                "actual_arrival_time": "13:26:00",
                "actual_departure_time": "13:28:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "543",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "27.08606600",
                "longitude": "78.57533500",
                "arrival": "13:26",
                "departure": "13:28"
            },
            {
                "source_name": "ETAWAH JN",
                "source_name_hi": "इटावा",
                "source_code": "ETW",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "11:18:00",
                "departure_time": "11:23:00",
                "actual_arrival_time": "14:06:00",
                "actual_departure_time": "14:11:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "598",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "26.78638000",
                "longitude": "79.02191200",
                "arrival": "14:06",
                "departure": "14:11"
            },
            {
                "source_name": "PHAPHUND",
                "source_name_hi": "फफूंद",
                "source_code": "PHD",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "12:06:00",
                "departure_time": "12:07:00",
                "actual_arrival_time": "14:54:00",
                "actual_departure_time": "14:55:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "654",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "26.66724900",
                "longitude": "79.47921800",
                "arrival": "14:54",
                "departure": "14:55"
            },
            {
                "source_name": "KANPUR CENTRAL",
                "source_name_hi": "कानपुर सैंट्रल",
                "source_code": "CNB",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "13:45:00",
                "departure_time": "13:55:00",
                "actual_arrival_time": "16:33:00",
                "actual_departure_time": "16:43:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "736",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "26.45436000",
                "longitude": "80.35108600",
                "arrival": "16:33",
                "departure": "16:43"
            },
            {
                "source_name": "FATEHPUR",
                "source_name_hi": "फतेहपुर",
                "source_code": "FTP",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "15:05:00",
                "departure_time": "15:07:00",
                "actual_arrival_time": "17:53:00",
                "actual_departure_time": "17:55:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "813",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "25.91705900",
                "longitude": "80.80143900",
                "arrival": "17:53",
                "departure": "17:55"
            },
            {
                "source_name": "PRYJ",
                "source_name_hi": "PRYJ",
                "source_code": "PRYJ",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "17:05:00",
                "departure_time": "17:10:00",
                "actual_arrival_time": "19:53:00",
                "actual_departure_time": "19:58:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "930",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "0.00000000",
                "longitude": "0.00000000",
                "arrival": "19:53",
                "departure": "19:58"
            },
            {
                "source_name": "MIRZAPUR",
                "source_name_hi": "मिर्जापुर",
                "source_code": "MZP",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "18:25:00",
                "departure_time": "18:27:00",
                "actual_arrival_time": "21:13:00",
                "actual_departure_time": "21:15:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "1020",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "-1",
                "delay_departure": "-1",
                "type": "-1",
                "platform": "0",
                "latitude": "25.13429000",
                "longitude": "82.56980900",
                "arrival": "21:13",
                "departure": "21:15"
            },
            {
                "source_name": "DDU",
                "source_name_hi": "DDU",
                "source_code": "DDU",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "20:38:00",
                "departure_time": "20:48:00",
                "actual_arrival_time": "23:26:00",
                "actual_departure_time": "23:36:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "1083",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "168",
                "delay_departure": "168",
                "type": "0",
                "platform": "0",
                "latitude": "0.00000000",
                "longitude": "0.00000000",
                "arrival": "23:26",
                "departure": "23:36"
            },
            {
                "source_name": "CHANDAULI MJHWR",
                "source_name_hi": "चंदौला माझवर",
                "source_code": "CDMR",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "23:46:00",
                "departure_time": "23:46:00",
                "actual_arrival_time": "23:46:00",
                "actual_departure_time": "23:46:00",
                "day": "0",
                "actual_day": "0",
                "is_stoppage": "0",
                "is_arrived": "1",
                "is_departed": "1",
                "is_travelled": "1",
                "distance": "1109",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "168",
                "delay_departure": "168",
                "type": "0",
                "platform": "0",
                "latitude": "25.26115300",
                "longitude": "83.26778400",
                "arrival": "23:46",
                "departure": "23:46"
            },
            {
                "source_name": "BHABUA ROAD",
                "source_name_hi": "भाबुआ रोड",
                "source_code": "BBU",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "21:28:00",
                "departure_time": "21:30:00",
                "actual_arrival_time": "00:06:00",
                "actual_departure_time": "00:08:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1135",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "158",
                "delay_departure": "158",
                "type": "0",
                "platform": "3",
                "latitude": "25.17309700",
                "longitude": "83.61900300",
                "arrival": "00:06",
                "departure": "00:08"
            },
            {
                "source_name": "SASARAM",
                "source_name_hi": "सासाराम",
                "source_code": "SSM",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "22:02:00",
                "departure_time": "22:04:00",
                "actual_arrival_time": "00:47:00",
                "actual_departure_time": "00:49:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1183",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "165",
                "delay_departure": "165",
                "type": "0",
                "platform": "0",
                "latitude": "24.95633600",
                "longitude": "84.01983300",
                "arrival": "00:47",
                "departure": "00:49"
            },
            {
                "source_name": "DEHRI ON SONE",
                "source_name_hi": "देहरी ऑन सोन",
                "source_code": "DOS",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "22:20:00",
                "departure_time": "22:22:00",
                "actual_arrival_time": "01:09:00",
                "actual_departure_time": "01:11:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1200",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "169",
                "delay_departure": "169",
                "type": "0",
                "platform": "0",
                "latitude": "24.91477500",
                "longitude": "84.18531400",
                "arrival": "01:09",
                "departure": "01:11"
            },
            {
                "source_name": "GAYA JN",
                "source_name_hi": "गया जं.",
                "source_code": "GAYA",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "23:30:00",
                "departure_time": "23:35:00",
                "actual_arrival_time": "02:10:00",
                "actual_departure_time": "02:15:00",
                "day": "2",
                "actual_day": "2",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1286",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "160",
                "delay_departure": "160",
                "type": "0",
                "platform": "0",
                "latitude": "24.80418800",
                "longitude": "84.99950400",
                "arrival": "02:10",
                "departure": "02:15"
            },
            {
                "source_name": "KODERMA",
                "source_name_hi": "कोडेरमा",
                "source_code": "KQR",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "00:54:00",
                "departure_time": "00:56:00",
                "actual_arrival_time": "03:24:00",
                "actual_departure_time": "03:26:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1362",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "150",
                "delay_departure": "150",
                "type": "0",
                "platform": "0",
                "latitude": "24.43449100",
                "longitude": "85.52920800",
                "arrival": "03:24",
                "departure": "03:26"
            },
            {
                "source_name": "HAZARIBAGH RD",
                "source_name_hi": "हजारीबाग रोड",
                "source_code": "HZD",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "01:27:00",
                "departure_time": "01:29:00",
                "actual_arrival_time": "03:57:00",
                "actual_departure_time": "03:59:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1410",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "150",
                "delay_departure": "150",
                "type": "0",
                "platform": "0",
                "latitude": "24.15975400",
                "longitude": "85.89025500",
                "arrival": "03:57",
                "departure": "03:59"
            },
            {
                "source_name": "PARASNATH",
                "source_name_hi": "पारसनाथ",
                "source_code": "PNME",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "01:57:00",
                "departure_time": "01:59:00",
                "actual_arrival_time": "04:22:00",
                "actual_departure_time": "04:24:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1437",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "145",
                "delay_departure": "145",
                "type": "0",
                "platform": "0",
                "latitude": "23.98782100",
                "longitude": "86.03771200",
                "arrival": "04:22",
                "departure": "04:24"
            },
            {
                "source_name": "NSC BOSE J GOMO",
                "source_name_hi": "गोमोह जं.",
                "source_code": "GMO",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "02:18:00",
                "departure_time": "02:23:00",
                "actual_arrival_time": "04:35:00",
                "actual_departure_time": "04:40:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1455",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "137",
                "delay_departure": "137",
                "type": "0",
                "platform": "0",
                "latitude": "23.87296600",
                "longitude": "86.14809000",
                "arrival": "04:35",
                "departure": "04:40"
            },
            {
                "source_name": "DHANBAD JN",
                "source_name_hi": "धनबाद जं.",
                "source_code": "DHN",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "03:17:00",
                "departure_time": "03:22:00",
                "actual_arrival_time": "05:05:00",
                "actual_departure_time": "05:10:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1484",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "108",
                "delay_departure": "108",
                "type": "0",
                "platform": "0",
                "latitude": "23.79119600",
                "longitude": "86.42918600",
                "arrival": "05:05",
                "departure": "05:10"
            },
            {
                "source_name": "ASANSOL JN",
                "source_name_hi": "आसनसोल जं.",
                "source_code": "ASN",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "04:31:00",
                "departure_time": "04:36:00",
                "actual_arrival_time": "06:29:00",
                "actual_departure_time": "06:34:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1543",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "118",
                "delay_departure": "118",
                "type": "0",
                "platform": "0",
                "latitude": "23.69110100",
                "longitude": "86.97481200",
                "arrival": "06:29",
                "departure": "06:34"
            },
            {
                "source_name": "DURGAPUR",
                "source_name_hi": "दुर्गापुर",
                "source_code": "DGR",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "05:06:00",
                "departure_time": "05:08:00",
                "actual_arrival_time": "07:05:00",
                "actual_departure_time": "07:07:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1585",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "119",
                "delay_departure": "119",
                "type": "0",
                "platform": "0",
                "latitude": "23.49536600",
                "longitude": "87.29822200",
                "arrival": "07:05",
                "departure": "07:07"
            },
            {
                "source_name": "BARDDHAMAN JN",
                "source_name_hi": "बर्दवान",
                "source_code": "BWN",
                "is_source": "0",
                "is_destination": "0",
                "arrival_time": "06:21:00",
                "departure_time": "06:26:00",
                "actual_arrival_time": "08:15:00",
                "actual_departure_time": "08:20:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1649",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "114",
                "delay_departure": "114",
                "type": "0",
                "platform": "0",
                "latitude": "23.24954800",
                "longitude": "87.87011100",
                "arrival": "08:15",
                "departure": "08:20"
            },
            {
                "source_name": "HOWRAH JN",
                "source_name_hi": "हावड़ा जं.",
                "source_code": "HWH",
                "is_source": "0",
                "is_destination": "1",
                "arrival_time": "08:05:00",
                "departure_time": "00:00:00",
                "actual_arrival_time": "10:22:00",
                "actual_departure_time": "02:17:00",
                "day": "3",
                "actual_day": "3",
                "is_stoppage": "1",
                "is_arrived": "0",
                "is_departed": "0",
                "is_travelled": "0",
                "distance": "1743",
                "is_departure_updating": "0",
                "is_arrival_updating": "0",
                "delay_arrival": "137",
                "delay_departure": "137",
                "type": "0",
                "platform": "0",
                "latitude": "22.58405800",
                "longitude": "88.34097900",
                "arrival": "10:22",
                "departure": "Stops"
            }
        ]
    };

    // console.log(api2Response.stations.forEach(element => {
    //     console.log(element.actual_arrival_time)
    // }))

    // function fetchLiveStatus() {
    //     console.log("Function running");
    //     let liveStatusString = '';
    //     fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${document.getElementById("userSourceStation").value}`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainLiveStatusById?id=${response[0].id}&date=${document.getElementById("userDepartureDate").value}`, options)
    //                 .then(response2 => response2.json())
    //                 .then(response2 => {
    //                     liveStatusString =
    //                     <div className='Content'>
    //                             <div className='Train_details'>
    //                                 <ul>
    //                                     <li>
    //                                         <span>{data.details.name + "/" + response2.details.name_hi}</span>
    //                                     </li>
    //                                     <li><span>{data.details.number}</span></li>
    //                                     <li>| ${data.stations.length}</li>
    //                                 </ul>
    //                                 Class: 5A 3A 2A 1A
    //                                 <div className='type'>
    //                                     Type:
    //                                     <form><input type="button" value={data.details.type} id="type"></input></form>
    //                                 </div>
    //                             </div>
    //                             <div className='Traintime'>
    //                                 <ul>
    //                                     <li>{data.train.trs_date_full}</li>
    //                                     <li>{data.train.tds_date_full}</li>
    //                                 </ul>
    //                                 <div className='Shapes'>
    //                                     <div className='circle'>
    //                                     </div>
    //                                     <div className='line'>
    //                                     </div>
    //                                     <div className='circle'>
    //                                     </div>
    //                                 </div>
    //                                 <div className='Stations'>
    //                                     {data.details.source_code}<br></br>
    //                                     {data.details.source}

    //                                     <ul>
    //                                         <li>S</li>
    //                                         <li>M</li>
    //                                         <li>T</li>
    //                                         <li>W</li>
    //                                         <li>T</li>
    //                                         <li>F</li>
    //                                         <li>S</li>
    //                                     </ul>
    //                                     {data.details.destination_code}<br></br>
    //                                     {data.details.destination}
    //                                 </div>

    //                             </div>
    //                             <div className='Calender'>
    //                                 <ul>
    //                                     <li>Thursday<br></br>30/03/2023</li>
    //                                     <li>Friday<br></br>01/04/2023</li>
    //                                     <li>Saturday<br></br>02/04/2023</li>
    //                                     <li>Sunday<br></br>03/04/2023</li>
    //                                     <li>Monday<br></br>04/04/2023</li>

    //                                 </ul>
    //                                 <form><input type="button" value="Refresh" id="refresh"></input></form>
    //                             </div>
    //                             <div className='livestatus'>
    //                                 <div className='tablehead'>
    //                                     <th>Station</th>
    //                                     <th>Arrival</th>
    //                                     <th>Departure</th>
    //                                     <th>Delay</th>
    //                                     <th>Hault</th>

    //                                 </div>
    //                                 <div className='Table'><span>Thursday, 30 March,2023</span>
    //                                     <table>
    //                                     ${data.stations.forEach(element => {
    //                                         <tr>
    //                                             <td>{element.source_name}({element.source_code})<br></br>{element.distance}kms</td>
    //                                             <td>{element.arrival_time}<br></br>{element.actual_arrival_time}</td>
    //                                             <td>{element.departure_time}<br></br>{element.actual_departure_time}</td>
    //                                             <td>{(new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.departure_time).getMinutes()) === 0 ? "On Time" : (new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.departure_time).getMinutes()) + "m"}</td>
    //                                             <td>{(new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.actual_arrival_time).getMinutes()) + "m"}</td>
    //                                         </tr>
    //                                     })}
    //                                     </table>
    //                                 </div>

    //                             </div>

    //                         </div>
    //                 })
    //                 .catch(err2 => console.error(err2));
    //         })
    //         .catch(err => console.error(err))
    //     console.log(liveStatusString);
    //     document.getElementById("liveStatus").innerHTML = liveStatusString;
    // }

    // const [data, setData] = useState({});
    // const [showLiveStatus, setShowLiveStatus] = useState(false);
    // fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${document.getElementById("trainNumber").value}`, options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response);
    //         fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainLiveStatusById?id=${response[0].id}&date=${document.getElementById("userDepartureDate").value}`, options)
    //             .then(response2 => response2.json())
    //             .then(response2 => {
    //                 console.log(response2);
    //                 setData(response2);
    //             })
    //             .catch(err2 => console.error(err2));
    //     })
    //     .catch(err => console.error(err))

    const [data, setData] = useState(null);
    const [showLiveStatus, setShowLiveStatus] = useState(false);
    const [trainId, setTrainId] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);

    useEffect(() => {
        if (trainId && departureDate) {
            fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${trainId}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainLiveStatusById?id=${response[0].id}&date=${departureDate}`, options)
                        .then(response2 => response2.json())
                        .then(response2 => {
                            console.log(response2);
                            setData(response2);
                        })
                        .catch(err2 => console.error(err2));
                })
                .catch(err => console.error(err))
        }
    }, [trainId, departureDate]);

    const handleSearch = () => {
        const trainNumber = document.getElementById("trainNumber").value;
        const userDepartureDate = document.getElementById("userDepartureDate").value;
        setTrainId(trainNumber);
        setDepartureDate(userDepartureDate);
        setShowLiveStatus(true);
        console.log("handle search fired");
    };

    // function fetchLiveStatus() {
    //     console.log("Function running");
    //     return(
    //         <div className='Content'>
    //             <div className='Train_details'>
    //                 <ul>
    //                     <li>
    //                         <span>{data.details.name + "/" + response2.details.name_hi}</span>
    //                     </li>
    //                     <li><span>{data.details.number}</span></li>
    //                     <li>| {data.stations.length}</li>
    //                 </ul>
    //                 Class: 5A 3A 2A 1A
    //                 <div className='type'>
    //                     Type:
    //                     <form><input type="button" value={data.details.type} id="type"></input></form>
    //                 </div>
    //             </div>
    //             <div className='Traintime'>
    //                 <ul>
    //                     <li>{data.train.trs_date_full}</li>
    //                     <li>{data.train.tds_date_full}</li>
    //                 </ul>
    //                 <div className='Shapes'>
    //                     <div className='circle'>
    //                     </div>
    //                     <div className='line'>
    //                     </div>
    //                     <div className='circle'>
    //                     </div>
    //                 </div>
    //                 <div className='Stations'>
    //                     {data.details.source_code}<br></br>
    //                     {data.details.source}

    //                     <ul>
    //                         <li>S</li>
    //                         <li>M</li>
    //                         <li>T</li>
    //                         <li>W</li>
    //                         <li>T</li>
    //                         <li>F</li>
    //                         <li>S</li>
    //                     </ul>
    //                     {data.details.destination_code}<br></br>
    //                     {data.details.destination}
    //                 </div>

    //             </div>
    //             <div className='Calender'>
    //                 <ul>
    //                     <li>Thursday<br></br>30/03/2023</li>
    //                     <li>Friday<br></br>01/04/2023</li>
    //                     <li>Saturday<br></br>02/04/2023</li>
    //                     <li>Sunday<br></br>03/04/2023</li>
    //                     <li>Monday<br></br>04/04/2023</li>

    //                 </ul>
    //                 <form><input type="button" value="Refresh" id="refresh"></input></form>
    //             </div>
    //             <div className='livestatus'>
    //                 <div className='tablehead'>
    //                     <th>Station</th>
    //                     <th>Arrival</th>
    //                     <th>Departure</th>
    //                     <th>Delay</th>
    //                     <th>Hault</th>

    //                 </div>
    //                 <div className='Table'><span>Thursday, 30 March,2023</span>
    //                     <table>
    //                         {data.stations.forEach(element => {
    //                             <tr>
    //                                 <td>{element.source_name}({element.source_code})<br></br>{element.distance}kms</td>
    //                                 <td>{element.arrival_time}<br></br>{element.actual_arrival_time}</td>
    //                                 <td>{element.departure_time}<br></br>{element.actual_departure_time}</td>
    //                                 <td>{(new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.departure_time).getMinutes()) === 0 ? "On Time" : (new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.departure_time).getMinutes()) + "m"}</td>
    //                                 <td>{(new Date("01/01/2023 " + element.actual_departure_time).getMinutes() - new Date("01/01/2023 " + element.actual_arrival_time).getMinutes()) + "m"}</td>
    //                             </tr>
    //                         })}
    //                     </table>
    //                 </div>

    //             </div>

    //         </div>
    //     )
    // }

    return (
        <>
            <div className='livestatushead'>
                Live Status
                <div className="Searchbox">

                    <div className="Tno">
                        Train Number
                        <form> <input type="text" id='trainNumber' /></form>
                    </div>
                    <div className="StartDate">
                        Train Start Date
                        <form><input type="date" id='userDepartureDate' /></form>
                    </div>
                    <div className="Search">
                        <Button className='active' onClick={handleSearch} content="Check Live Status" style={{ width: '200px', height: '40px', fontWeight: '100', borderRadius: '5px', fontSize: '20px' }}> Search Train</Button>
                    </div>
                </div>
            </div>
            {!showLiveStatus && (<div className='logo2'>
                <img src="./src/images/AppLogo.png" alt="" />
            </div>)}


            {showLiveStatus && data && (<div className='Content'>
                {console.log("data: " + data)}
                <div className='Train_details'>
                    <ul>
                        <li>
                            <span>{data.details.name + "/" + data.details.name_hi}</span>
                        </li>
                        <li><span>{data.details.number}</span></li>
                        <li>| &nbsp;{data.stations.length} Stops</li>
                    </ul>
                    <div className='type'>
                        Type:
                        <form><input type="button" value={data.details.type} id="type"></input></form>
                    </div>
                </div>
                <div className='Traintime'>
                    <ul>
                        <li>{data.train.trs_date_full}</li>
                        <li>{data.train.tds_date_full}</li>
                    </ul>
                    <div className='Shapes'>
                        <div className='circle'>
                        </div>
                        <div className='line'>
                        </div>
                        <div className='circle'>
                        </div>
                    </div>
                    <div className='Stations'>
                        <ul>
                            <li>{data.details.source_code}<br></br>
                                {data.details.source}</li>
                            <li>{data.details.destination_code}<br></br>
                                {data.details.destination}</li>
                        </ul>
                    </div>

                </div>
                <div className='livestatus'>
                    <div className='Table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Station</th>
                                    <th>Arrival</th>
                                    <th>Departure</th>
                                    <th>Delay</th>
                                    <th>Hault</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.stations.map(element => (
                                    <tr key={element.source_code}>
                                        <td> <div style={{
                                            height: '5px', width: '5px', borderRadius: '50px',
                                            backgroundColor: element.is_arrived ? (element.is_departed ? 'green' : 'yellow') : 'red'
                                        }}></div>
                                            {element.source_name}{element.source_code} <br></br>{element.distance}kms</td>
                                        {/* <td style={{ whiteSpace: "pre-wrap" }}>
                                            {element.is_source === "1" ? (<span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>Source</span>) 
                                            : (<span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>{element.actual_arrival_time}</span>) + "\n" + element.arrival_time}
                                        </td>
                                        <td style={{ whiteSpace: "pre-wrap" }}>
                                            {element.is_destination === "1" ? (<span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>Destination</span>) 
                                            : (<span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>{element.actual_departure_time}</span>) + "\n" + element.departure_time}
                                        </td> */}
                                        <td style={{ whiteSpace: "pre-wrap" }}>
                                            {element.is_source === "1" ? (
                                                <span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>Source</span>
                                            ) : (
                                                <div>
                                                    <span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>{element.actual_arrival_time}</span>
                                                    <br />
                                                    {element.arrival_time}
                                                </div>
                                            )}
                                        </td>
                                        <td style={{ whiteSpace: "pre-wrap" }}>
                                            {element.is_destination === "1" ? (
                                                <span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>Destination</span>
                                            ) : (
                                                <div>
                                                    <span style={{color: ((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0)?"green":"red"}}>{element.actual_departure_time}</span>
                                                    <br />
                                                    {element.departure_time}
                                                </div>
                                            )}
                                        </td>
                                        <td>{
                                            (new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) === 0
                                                ? "On Time"
                                                : (
                                                    ((Math.floor((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 / 60)) > 0 && (Math.floor((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 % 60)) > 0)
                                                        ? (Math.floor((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 / 60) + "h " + Math.floor((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 % 60) + "m Late")
                                                        : (Math.floor((new Date("01/02/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 / 60) + "h " + Math.floor((new Date("01/02/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.departure_time).getTime()) / 1000 / 60 % 60) + "m Late")
                                                )
                                        }</td>
                                        <td>{(element.is_source === "1" || element.is_destination === "1") ? "--" : `${((new Date("01/01/2023 " + element.actual_departure_time).getTime() - new Date("01/01/2023 " + element.actual_arrival_time).getTime()) / 1000 / 60) + "m"}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>)}


        </>
    )
}