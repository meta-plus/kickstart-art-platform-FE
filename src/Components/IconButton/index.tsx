import { ColorTypes } from '@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types'
import * as styles from './style'
import { IconButtonType } from "./type"


const IconButton = ({
    type, 
    color = ColorTypes.GREY,
    iconSize = 10, 
    active = true,
    onClick
}: {
    type: IconButtonType | string,
    color?: string,
    iconSize?: number,
    active?: boolean,
    onClick?: (data?:any) => void
}) => {
    switch (type) {
        case "archive":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M14 5.33301V13.9997H2V5.33301" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.3333 2H0.666672V5.33333H15.3333V2Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 8H9.33334" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
            )
        case "arrowDown":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick}
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "calendar":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.6666 1.33325V3.99992" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.33337 1.33325V3.99992" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 6.66675H14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "copy":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33333 9.99967H2.66666C2.31304 9.99967 1.9739 9.8592 1.72385 9.60915C1.4738 9.3591 1.33333 9.01996 1.33333 8.66634V2.66634C1.33333 2.31272 1.4738 1.97358 1.72385 1.72353C1.9739 1.47348 2.31304 1.33301 2.66666 1.33301H8.66666C9.02028 1.33301 9.35942 1.47348 9.60947 1.72353C9.85952 1.97358 10 2.31272 10 2.66634V3.33301" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) 
        case "cross":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18 6L6 18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "flag":
            return(
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick}
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2.66666 9.99967C2.66666 9.99967 3.33332 9.33301 5.33332 9.33301C7.33332 9.33301 8.66666 10.6663 10.6667 10.6663C12.6667 10.6663 13.3333 9.99967 13.3333 9.99967V1.99967C13.3333 1.99967 12.6667 2.66634 10.6667 2.66634C8.66666 2.66634 7.33332 1.33301 5.33332 1.33301C3.33332 1.33301 2.66666 1.99967 2.66666 1.99967V9.99967Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.66666 14.6667V10" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "home":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 5.99992L8 1.33325L14 5.99992V13.3333C14 13.6869 13.8595 14.026 13.6095 14.2761C13.3594 14.5261 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5261 2.39052 14.2761C2.14048 14.026 2 13.6869 2 13.3333V5.99992Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 14.6667V8H10V14.6667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "image":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 15L16 10L5 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "input":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.33334 2.66669H2.66668C2.31305 2.66669 1.97392 2.80716 1.72387 3.05721C1.47382 3.30726 1.33334 3.6464 1.33334 4.00002V13.3334C1.33334 13.687 1.47382 14.0261 1.72387 14.2762C1.97392 14.5262 2.31305 14.6667 2.66668 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3334V8.66669" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.3333 1.66665C12.5986 1.40144 12.9583 1.25244 13.3333 1.25244C13.7084 1.25244 14.0681 1.40144 14.3333 1.66665C14.5986 1.93187 14.7476 2.29158 14.7476 2.66665C14.7476 3.04173 14.5986 3.40144 14.3333 3.66665L8.00001 9.99999L5.33334 10.6667L6.00001 7.99999L12.3333 1.66665Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "list":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5.33333 4H14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33333 8H14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33333 12H14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 4H2.00667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 8H2.00667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H2.00667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "menu":
            return( 
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width={iconSize} height={iconSize} rx="4" fill={color} fillOpacity="0.08" />
                    <path d="M7 16H25" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 10H25" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 22H25" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "more":
            return (
                <svg 
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill={color} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill={color} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill={color} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
            ) 
        case "performance":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.66663 4.66675H4.66663V10.6667H6.66663V4.66675Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.3334 4.66675H9.33337V8.00008H11.3334V4.66675Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "students":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11.3333 14V12.6667C11.3333 11.9594 11.0523 11.2811 10.5522 10.781C10.0521 10.281 9.37387 10 8.66663 10H3.33329C2.62605 10 1.94777 10.281 1.44767 10.781C0.947578 11.2811 0.666626 11.9594 0.666626 12.6667V14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.3334 14V12.6667C15.3329 12.0758 15.1363 11.5019 14.7743 11.0349C14.4123 10.5679 13.9055 10.2344 13.3334 10.0867" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "task":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2.66663 13C2.66663 12.558 2.84222 12.1341 3.15478 11.8215C3.46734 11.509 3.89127 11.3334 4.33329 11.3334H13.3333" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.33329 1.33337H13.3333V14.6667H4.33329C3.89127 14.6667 3.46734 14.4911 3.15478 14.1786C2.84222 13.866 2.66663 13.4421 2.66663 13V3.00004C2.66663 2.55801 2.84222 2.13409 3.15478 1.82153C3.46734 1.50897 3.89127 1.33337 4.33329 1.33337V1.33337Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "topics":
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.66663 4H10.6666C11.0202 4 11.3594 4.14048 11.6094 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V10" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6V14" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> 
            )
        case "testing": //no icon for testing yet
            return (
                <svg  
                    className={styles.buttonDiv(active, iconSize)}
                    onClick={onClick} 
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke={ColorTypes.RED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 6L6 10" stroke={ColorTypes.RED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L10 10" stroke={ColorTypes.RED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        default: 
            return( <> </> )
    }
}

export {
    IconButton,
    IconButtonType
}