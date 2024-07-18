import classes from './ModalWindow.module.scss';
import {ModalInvisible} from "../../store/ModalWindowSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/useDispatchAndSelector";
import ModalProductContent from "./ModalProductContent";


export default function ModalWindow() {

    const dispatch = useAppDispatch();
    const active = useAppSelector(state => state.modalWindow.isModalOpen)
    const { productInfo } = useAppSelector(state => state.modalWindow)


    {
        return (
            <div
                className={`
                    ${classes[active && 'active']}
                    ${classes['modalContainer']}
                    `}
                onClick={() => dispatch(ModalInvisible())}>
                <div
                    className={`
                        ${classes['modalContent']}
                        ${classes[active && 'active']}
                        `}
                    onClick={e => e.stopPropagation()}
                >

                {productInfo && <ModalProductContent/>}

                </div>
            </div>
        )
    }




}