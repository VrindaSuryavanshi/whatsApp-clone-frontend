// export default function Ticks({
//     status

// }) {
//     const size=16; // control tick size here

//     // Single tick
//     if (status==="sent") {
//         return (<svg className="ticks"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 18 18"

//             width= {
//                 size
//             }

//             height= {
//                 size
//             }

//             > <path d="M5.5 9.5l2.5 2.5 5.5-5.5"
//             fill="none"
//             stroke="#8696a0"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             /> </svg>);
//     }

//     // Double tick - delivered
//     if (status==="delivered") {
//         return (<svg className="ticks"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 18"

//             width= {
//                 size
//             }

//             height= {
//                 size
//             }

//             > <path d="M1 9l4 4L13 5"
//             fill="none"
//             stroke="#8696a0"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             /> <path d="M7 9l4 4L21 3"
//             fill="none"
//             stroke="#8696a0"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             /> </svg>);
//     }

//     // Double tick - read (blue)
//     if (status==="read") {
//         return (<svg className="ticks"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 18"

//             width= {
//                 size
//             }

//             height= {
//                 size
//             }

//             > <path d="M1 9l4 4L13 5"
//             fill="none"
//             stroke="#34B7F1"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             /> <path d="M7 9l4 4L21 3"
//             fill="none"
//             stroke="#34B7F1"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             /> </svg>);
//     }

//     return null;
// }