import {useRef} from 'react'

const useScroll = () => {
const elRef = useRef(null);
const executeScroll = () => elRef.current.scrollIntoView();

return [executeScroll, elRef];
}

export default useScroll
