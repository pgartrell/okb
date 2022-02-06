import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faClock, faClipboard, faListAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export const HOWITWORKSDATA = [
    {
        id: 0,
        step: 'Step 1',
        description: 'Click to get started',
        img: faClipboard
    },
    {
        id: 1,
        step: 'Step 2',
        description: 'Add your details',
        img: faListAlt
    },
    {
        id: 2,
        step: 'Step 3',
        description: 'Confirm time & area',
        img: faClock
    },
    {
        id: 3,
        step: 'Step 4',
        description: 'Meet at our appointment',
        img: faMapMarkerAlt
    },
    {
        id: 4,
        step: 'Step 5',
        description: 'Complete!',
        img: faCheckCircle
    }
]