import {useDispatch} from 'react-redux';
import { BagDetails } from '@/interfaces/interfaces';
import { setBag } from '@/redux/bagSlice';

export default function Route(data:BagDetails){
    const Dispatch = useDispatch()
    Dispatch(setBag(data));
}
